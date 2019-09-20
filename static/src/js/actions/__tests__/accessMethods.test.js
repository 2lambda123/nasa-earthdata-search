import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import { fetchAccessMethods } from '../accessMethods'
import { ADD_ACCESS_METHODS } from '../../constants/actionTypes'

const mockStore = configureMockStore([thunk])

beforeEach(() => {
  jest.clearAllMocks()

  nock.disableNetConnect()
})

afterEach(() => {
  nock.cleanAll()
  nock.enableNetConnect()
})

describe('fetchAccessMethods', () => {
  test('does not fetch access methods if the user is not logged in', () => {
    const store = mockStore({
      authToken: ''
    })

    // call the dispatch
    expect(store.dispatch(fetchAccessMethods())).toBeNull()
  })

  test('returns download method if it is the only access method', async () => {
    const collectionId = 'collectionId'
    const store = mockStore({
      authToken: '123',
      metadata: {
        collections: {
          allIds: [collectionId],
          byId: {
            collectionId: {
              metadata: {
                tags: {
                  'edsc.extra.serverless.collection_capabilities': {
                    data: {
                      granule_online_access_flag: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      project: {
        collectionIds: [collectionId]
      }
    })

    // call the dispatch
    await store.dispatch(fetchAccessMethods([collectionId])).then(() => {
      const storeActions = store.getActions()
      expect(storeActions[0]).toEqual({
        type: ADD_ACCESS_METHODS,
        payload: {
          collectionId,
          methods: {
            download: {
              isValid: true,
              type: 'download'
            }
          },
          selectedAccessMethod: 'download'
        }
      })
    })
  })

  test('fetches access methods from api if needed', async () => {
    const download = {
      isValid: true,
      type: 'download'
    }
    const echoOrder0 = {
      id: 'service_id',
      type: 'ECHO ORDERS',
      url: 'mock url',
      option_definition: {
        id: 'option_definition_guid',
        name: 'Delivery Option'
      },
      form: 'mock form here'
    }
    nock(/localhost/)
      .post(/access_methods/)
      .reply(200, {
        accessMethods: {
          download,
          echoOrder0
        }
      })

    const collectionId = 'collectionId'
    const store = mockStore({
      authToken: '123',
      metadata: {
        collections: {
          allIds: [collectionId],
          byId: {
            collectionId: {
              metadata: {
                tags: {
                  'edsc.extra.serverless.subset_service.echo_orders': {
                    data: {
                      option_definitions: [
                        {
                          id: 'option_definition_guid',
                          name: 'Delivery Option'
                        }
                      ]
                    }
                  },
                  'edsc.extra.serverless.collection_capabilities': {
                    data: {
                      granule_online_access_flag: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      project: {
        collectionIds: [collectionId]
      }
    })

    // call the dispatch
    await store.dispatch(fetchAccessMethods([collectionId])).then(() => {
      const storeActions = store.getActions()
      expect(storeActions[0]).toEqual({
        type: ADD_ACCESS_METHODS,
        payload: {
          collectionId,
          methods: {
            download,
            echoOrder0
          }
        }
      })
    })
  })
})
