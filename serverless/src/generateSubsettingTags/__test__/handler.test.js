import AWS from 'aws-sdk'

import { relevantServices, relevantServiceCollections } from './mocks'
import * as getSystemToken from '../../util/urs/getSystemToken'
import * as pageAllCmrResults from '../../util/cmr/pageAllCmrResults'
import * as getRelevantServices from '../getRelevantServices'
import generateSubsettingTags from '../handler'

const OLD_ENV = process.env

beforeEach(() => {
  jest.clearAllMocks()

  // Manage resetting ENV variables
  jest.resetModules()
  process.env = { ...OLD_ENV }
  delete process.env.NODE_ENV
})

afterEach(() => {
  // Restore any ENV variables overwritten in tests
  process.env = OLD_ENV
})

describe('generateSubsettingTags', () => {
  test('submits the correct data to sqs', async () => {
    // Set the necessary ENV variables to ensure all values are tested
    process.env.tagQueueUrl = 'http://example.com/queue'

    jest.spyOn(getSystemToken, 'getSystemToken').mockImplementation(() => 'mocked-system-token')

    jest.spyOn(getRelevantServices, 'getRelevantServices').mockImplementationOnce(() => relevantServices)
    jest.spyOn(pageAllCmrResults, 'pageAllCmrResults').mockImplementation(() => relevantServiceCollections)

    const sqsSendMessagePromise = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValue()
    })

    AWS.SQS = jest.fn()
      .mockImplementationOnce(() => ({
        sendMessage: sqsSendMessagePromise
      }))
      .mockImplementationOnce(() => ({
        sendMessage: sqsSendMessagePromise
      }))
      .mockImplementationOnce(() => ({
        sendMessage: sqsSendMessagePromise
      }))
      .mockImplementationOnce(() => ({
        sendMessage: sqsSendMessagePromise
      }))
      .mockImplementationOnce(() => ({
        sendMessage: sqsSendMessagePromise
      }))
      .mockImplementationOnce(() => ({
        sendMessage: sqsSendMessagePromise
      }))
      .mockImplementationOnce(() => ({
        sendMessage: sqsSendMessagePromise
      }))

    const event = {}
    const context = {}
    await generateSubsettingTags(event, context)

    // 4 calls to add tags to collections
    // 3 calls to remove stale tags
    expect(sqsSendMessagePromise).toBeCalledTimes(7)

    /**
     * We have to make a call for each service that we are going
     * to associate collections with. Our mocked data returns 4
     * relevant services which will result in 4 calls to sqs
     */
    expect(sqsSendMessagePromise.mock.calls[0]).toEqual([{
      MessageBody: JSON.stringify({
        tagName: 'edsc.extra.serverless.subset_service.esi',
        action: 'ADD',
        append: false,
        requireGranules: false,
        searchCriteria: {
          condition: {
            or: [
              {
                concept_id: 'C00000001-EDSC'
              }
            ]
          }
        },
        tagData: {
          id: 'S00000001-EDSC',
          type: 'ESI',
          url: 'http://mapserver.eol.ucar.edu/acadis/'
        }
      }),
      QueueUrl: 'http://example.com/queue'
    }])
    expect(sqsSendMessagePromise.mock.calls[1]).toEqual([{
      MessageBody: JSON.stringify({
        tagName: 'edsc.extra.serverless.subset_service.esi',
        action: 'ADD',
        append: false,
        requireGranules: false,
        searchCriteria: {
          condition: {
            or: [
              {
                concept_id: 'C00000002-EDSC'
              }, {
                concept_id: 'C00000003-EDSC'
              }
            ]
          }
        },
        tagData: {
          id: 'S00000002-EDSC',
          type: 'ESI'
        }
      }),
      QueueUrl: 'http://example.com/queue'
    }])
    expect(sqsSendMessagePromise.mock.calls[2]).toEqual([{
      MessageBody: JSON.stringify({
        tagName: 'edsc.extra.serverless.subset_service.echo_orders',
        action: 'ADD',
        append: false,
        requireGranules: false,
        searchCriteria: {
          condition: {
            or: [
              {
                concept_id: 'C00000009-EDSC'
              }
            ]
          }
        },
        tagData: {
          id: 'S00000003-EDSC',
          type: 'ECHO ORDERS',
          url: 'http://mapserver.eol.ucar.edu/acadis/'
        }
      }),
      QueueUrl: 'http://example.com/queue'
    }])
    expect(sqsSendMessagePromise.mock.calls[3]).toEqual([{
      MessageBody: JSON.stringify({
        tagName: 'edsc.extra.serverless.subset_service.opendap',
        action: 'ADD',
        append: false,
        requireGranules: false,
        searchCriteria: {
          condition: {
            or: [
              {
                concept_id: 'C00000005-EDSC'
              }
            ]
          }
        },
        tagData: {
          id: 'S00000005-EDSC',
          type: 'OPeNDAP'
        }
      }),
      QueueUrl: 'http://example.com/queue'
    }])

    /**
     * To remove stale tags we can provide CMR with the tag and
     * all collections that we want to disassociate data from because
     * we dont have specific data that we care about. Our mocked data
     * returns three relevant tags (ESI, ECHO ORDERS and OPeNDAP)
     * which will result in 3 calls to sqs
     */
    expect(sqsSendMessagePromise.mock.calls[4]).toEqual([{
      MessageBody: JSON.stringify({
        tagName: 'edsc.extra.serverless.subset_service.esi',
        action: 'REMOVE',
        searchCriteria: {
          condition: {
            and: [
              {
                tag: {
                  tag_key: 'edsc.extra.serverless.subset_service.esi'
                }
              },
              {
                not: {
                  or: [
                    {
                      concept_id: 'C00000001-EDSC'
                    }, {
                      concept_id: 'C00000002-EDSC'
                    }, {
                      concept_id: 'C00000003-EDSC'
                    }
                  ]
                }
              }
            ]
          }
        }
      }),
      QueueUrl: 'http://example.com/queue'
    }])
    expect(sqsSendMessagePromise.mock.calls[5]).toEqual([{
      MessageBody: JSON.stringify({
        tagName: 'edsc.extra.serverless.subset_service.opendap',
        action: 'REMOVE',
        searchCriteria: {
          condition: {
            and: [
              {
                tag: {
                  tag_key: 'edsc.extra.serverless.subset_service.opendap'
                }
              },
              {
                not: {
                  or: [
                    {
                      concept_id: 'C00000005-EDSC'
                    }
                  ]
                }
              }
            ]
          }
        }
      }),
      QueueUrl: 'http://example.com/queue'
    }])
    expect(sqsSendMessagePromise.mock.calls[6]).toEqual([{
      MessageBody: JSON.stringify({
        tagName: 'edsc.extra.serverless.subset_service.echo_orders',
        action: 'REMOVE',
        searchCriteria: {
          condition: {
            and: [
              {
                tag: {
                  tag_key: 'edsc.extra.serverless.subset_service.echo_orders'
                }
              },
              {
                not: {
                  or: [
                    {
                      concept_id: 'C00000009-EDSC'
                    }
                  ]
                }
              }
            ]
          }
        }
      }),
      QueueUrl: 'http://example.com/queue'
    }])
  })
})
