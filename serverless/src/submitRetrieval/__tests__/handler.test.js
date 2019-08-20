import knex from 'knex'
import mockKnex from 'mock-knex'
import AWS from 'aws-sdk'
import * as getDbConnection from '../../util/database/getDbConnection'
import * as getEarthdataConfig from '../../../../sharedUtils/config'
import submitRetrieval from '../handler'
import { orderPayload, echoOrderPayload, badOrderPayload } from './mocks'
import * as generateRetrievalPayloads from '../generateRetrievalPayloads'

let dbConnectionToMock
let dbTracker

const OLD_ENV = process.env

beforeEach(() => {
  jest.clearAllMocks()

  jest.spyOn(getEarthdataConfig, 'getSecretEarthdataConfig').mockImplementation(() => ({ secret: 'jwt-secret' }))

  jest.spyOn(getDbConnection, 'getDbConnection').mockImplementationOnce(() => {
    dbConnectionToMock = knex({
      client: 'pg',
      debug: false
    })

    // Mock the db connection
    mockKnex.mock(dbConnectionToMock)

    return dbConnectionToMock
  })

  dbTracker = mockKnex.getTracker()
  dbTracker.install()

  // Manage resetting ENV variables
  // TODO: This is causing problems with mocking knex but is noted as important for managing process.env
  // jest.resetModules()
  process.env = { ...OLD_ENV }
  delete process.env.NODE_ENV
})

afterEach(() => {
  dbTracker.uninstall()

  // Restore any ENV variables overwritten in tests
  process.env = OLD_ENV
})

describe('submitRetrieval', () => {
  test('correctly submits an order', async () => {
    dbTracker.on('query', (query, step) => {
      if (step === 2) {
        query.response({
          id: 19
        })
      } else if (step === 3) {
        query.response([{
          id: 1,
          user_id: 19,
          environment: 'prod'
        }])
      } else if (step === 4) {
        query.response([{
          id: 2,
          access_method: {
            type: 'ECHO ORDERS',
            id: 'S10000001-EDSC',
            url: 'https://n5eil09e.ecs.edsc.org/egi/request'
          },
          collection_metadata: {},
          granule_count: 27
        }])
      } else if (step === 5) {
        query.response({
          id: 19,
          granule_params: {
            echo_collection_id: 'C10000005-EDSC',
            bounding_box: '23.607421875,5.381262277997806,27.7965087890625,14.973184553280502'
          }
        })
      } else {
        query.response([])
      }
    })

    const orderResponse = await submitRetrieval(orderPayload)

    const { queries } = dbTracker.queries

    expect(queries[0].sql).toContain('BEGIN')
    expect(queries[1].method).toEqual('first')
    expect(queries[2].method).toEqual('insert')
    expect(queries[3].method).toEqual('insert')
    // retrieve saved access configuration
    expect(queries[4].method).toEqual('select')
    // add new access configuration
    expect(queries[5].method).toEqual('insert')
    expect(queries[6].sql).toContain('COMMIT')

    const { body } = orderResponse

    expect(JSON.parse(body)).toEqual({
      environment: 'prod',
      id: 1,
      user_id: 19
    })
  })

  test('correctly submits an order and queues order messages', async () => {
    process.env.catalogRestQueueUrl = 'http://example.com/echoQueue'

    const retrievalCollectionRecord = {
      id: 2,
      access_method: {
        type: 'ESI',
        id: 'S10000001-EDSC',
        url: 'https://n5eil09e.ecs.edsc.org/egi/request'
      },
      collection_metadata: {},
      granule_count: 27
    }
    dbTracker.on('query', (query, step) => {
      if (step === 2) {
        query.response({
          id: 19
        })
      } else if (step === 3) {
        query.response([{
          id: 1,
          user_id: 19,
          environment: 'prod'
        }])
      } else if (step === 4) {
        query.response([retrievalCollectionRecord])
      } else if (step === 7) {
        query.response([{
          id: 5
        }])
      } else {
        query.response([])
      }
    })

    const generateRetrievalPayloadsSpy = jest.spyOn(generateRetrievalPayloads, 'generateRetrievalPayloads')
      .mockImplementationOnce(() => [{
        page_num: 1,
        page_size: 2000
      }])

    const sqsSendMessagePromise = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValue()
    })

    AWS.SQS = jest.fn()
      .mockImplementationOnce(() => ({
        sendMessageBatch: sqsSendMessagePromise
      }))

    const orderResponse = await submitRetrieval(echoOrderPayload)

    const { queries } = dbTracker.queries

    expect(queries[0].sql).toContain('BEGIN')
    expect(queries[1].method).toEqual('first')
    expect(queries[2].method).toEqual('insert')
    expect(queries[3].method).toEqual('insert')
    // retrieve saved access configuration
    expect(queries[4].method).toEqual('select')
    // add new access configuration
    expect(queries[5].method).toEqual('insert')
    expect(queries[6].method).toEqual('insert')
    expect(queries[7].sql).toContain('COMMIT')
    expect(sqsSendMessagePromise.mock.calls[0]).toEqual([{
      QueueUrl: 'http://example.com/echoQueue',
      Entries: [{
        Id: '2-1',
        MessageBody: JSON.stringify({
          accessToken: '2e8e995e7511c2c6620336797b',
          id: 5
        })
      }]
    }])

    const { body } = orderResponse

    expect(JSON.parse(body)).toEqual({
      environment: 'prod',
      id: 1,
      user_id: 19
    })

    expect(generateRetrievalPayloadsSpy).toBeCalledTimes(1)
    expect(generateRetrievalPayloadsSpy).toBeCalledWith(retrievalCollectionRecord)
  })

  test('correctly rolls back the transaction on failure', async () => {
    dbTracker.on('query', (query, step) => {
      if (step === 2) {
        query.response({
          id: 19
        })
      } else if (step === 3) {
        // Force a failure to ensure ROLLBACK is working
        query.reject('INSERT failed')
      } else {
        query.response([])
      }
    })

    const orderResponse = await submitRetrieval(badOrderPayload)

    const { queries } = dbTracker.queries

    expect(queries[0].sql).toContain('BEGIN')
    expect(queries[1].method).toEqual('first')
    expect(queries[2].method).toEqual('insert')
    expect(queries[3].sql).toContain('ROLLBACK')

    const { statusCode } = orderResponse

    expect(statusCode).toEqual(500)
  })
})
