import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { remove, get } from 'tiny-cookie'

import actions from '../index'
import { updateFocusedCollection } from '../focusedCollection'
import { getCollectionsResponseUnauth, getCollectionsResponseAuth } from './mocks'
import {
  UPDATE_FOCUSED_COLLECTION,
  UPDATE_GRANULE_RESULTS,
  UPDATE_GRANULE_QUERY,
  UPDATE_COLLECTION_METADATA,
  COPY_GRANULE_RESULTS_TO_COLLECTION,
  ADD_GRANULE_RESULTS_FROM_COLLECTIONS,
  UPDATE_AUTH
} from '../../constants/actionTypes'

const mockStore = configureMockStore([thunk])

beforeEach(() => {
  jest.clearAllMocks()
  jest.restoreAllMocks()
})

describe('updateFocusedCollection', () => {
  test('should create an action to update the focused collection', () => {
    const payload = 'newCollectionId'
    const expectedAction = {
      type: UPDATE_FOCUSED_COLLECTION,
      payload
    }
    expect(updateFocusedCollection(payload)).toEqual(expectedAction)
  })
})

describe('changeFocusedCollection', () => {
  test('with a collectionId it should update the focusedCollection and call getFocusedCollection', () => {
    const collectionId = 'collectionId'

    // mocks
    const getFocusedCollectionMock = jest.spyOn(actions, 'getFocusedCollection')
    getFocusedCollectionMock.mockImplementation(() => jest.fn())
    const getTimelineMock = jest.spyOn(actions, 'getTimeline')
    getTimelineMock.mockImplementation(() => jest.fn())

    // mockStore with initialState
    const store = mockStore({
      metadata: {
        collections: {
          allIds: [],
          byId: {}
        }
      },
      focusedCollection: '',
      query: {
        collection: {
          keyword: 'old stuff'
        }
      },
      router: {
        location: {
          pathname: ''
        }
      }
    })

    // call the dispatch
    store.dispatch(actions.changeFocusedCollection(collectionId))

    // Is updateCollectionQuery called with the right payload
    const storeActions = store.getActions()
    expect(storeActions[0]).toEqual({
      type: UPDATE_FOCUSED_COLLECTION,
      payload: collectionId
    })

    // were the mocks called
    expect(getFocusedCollectionMock).toHaveBeenCalledTimes(1)
    expect(getTimelineMock).toHaveBeenCalledTimes(1)
  })

  test('with a previously visited collectionId it should update the focusedCollection and copy granules', () => {
    const collectionId = 'collectionId'

    // mocks
    const getFocusedCollectionMock = jest.spyOn(actions, 'getFocusedCollection')
    getFocusedCollectionMock.mockImplementation(() => jest.fn())
    const getTimelineMock = jest.spyOn(actions, 'getTimeline')
    getTimelineMock.mockImplementation(() => jest.fn())

    // mockStore with initialState
    const granules = {
      allIds: ['granule1'],
      byId: {
        granule1: {
          mock: 'data'
        }
      }
    }
    const store = mockStore({
      metadata: {
        collections: {
          allIds: [collectionId],
          byId: {
            [collectionId]: {
              granules
            }
          }
        }
      },
      focusedCollection: '',
      query: {
        collection: {
          keyword: 'old stuff'
        }
      },
      router: {
        location: {
          pathname: ''
        }
      }
    })

    // call the dispatch
    store.dispatch(actions.changeFocusedCollection(collectionId))

    // Is updateCollectionQuery called with the right payload
    const storeActions = store.getActions()
    expect(storeActions[0]).toEqual({
      type: ADD_GRANULE_RESULTS_FROM_COLLECTIONS,
      payload: {
        ...granules
      }
    })
    expect(storeActions[1]).toEqual({
      type: UPDATE_FOCUSED_COLLECTION,
      payload: collectionId
    })

    // were the mocks called
    expect(getFocusedCollectionMock).toHaveBeenCalledTimes(1)
    expect(getTimelineMock).toHaveBeenCalledTimes(1)
  })

  test('without a collectionId it should clear the focusedCollection', () => {
    const collectionId = ''

    // mocks
    const getFocusedCollectionMock = jest.spyOn(actions, 'getFocusedCollection')
    getFocusedCollectionMock.mockImplementation(() => jest.fn())
    const getTimelineMock = jest.spyOn(actions, 'getTimeline')
    getTimelineMock.mockImplementation(() => jest.fn())

    // mockStore with initialState
    const granules = {
      allIds: ['granule1'],
      byId: {
        granule1: {
          mock: 'data'
        }
      }
    }
    const store = mockStore({
      focusedCollection: '',
      metadata: {
        collections: {
          allIds: [],
          byId: {}
        }
      },
      query: {
        collection: {
          keyword: 'old stuff'
        }
      },
      router: {
        location: {
          pathname: ''
        }
      },
      searchResults: {
        granules
      }
    })

    // call the dispatch
    store.dispatch(actions.changeFocusedCollection(collectionId))

    // Is updateCollectionQuery called with the right payload
    const storeActions = store.getActions()
    expect(storeActions[0]).toEqual({
      type: COPY_GRANULE_RESULTS_TO_COLLECTION,
      payload: {
        collectionId: '',
        granules
      }
    })

    // were the mocks called
    expect(getFocusedCollectionMock).toHaveBeenCalledTimes(1)
    expect(getTimelineMock).toHaveBeenCalledTimes(1)
  })
})

describe('getFocusedCollection', () => {
  beforeEach(() => {
    moxios.install()

    jest.clearAllMocks()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('should update the focusedCollection and call getGranules', async () => {
    moxios.stubRequest(/search\/collections\.json/, {
      status: 200,
      response: {
        feed: {
          updated: '2019-03-27T20:21:14.705Z',
          id: 'https://cmr.sit.earthdata.nasa.gov:443/search/collections.json?params_go_here',
          title: 'ECHO dataset metadata',
          entry: [{
            id: 'collectionId1',
            short_name: 'id_1',
            version_id: 'VersionID'
          }],
          facets: {},
          hits: 1
        }
      },
      headers: {
        'cmr-hits': 1
      }
    })

    moxios.stubRequest(/search\/collections\.umm_json/, {
      status: 200,
      response: {
        hits: 1,
        took: 234,
        items: [{
          meta: {
            'concept-id': 'collectionId1'
          },
          umm: {
            data: 'collectionId1'
          }
        }]
      },
      headers: {
        'cmr-hits': 1
      }
    })

    const collectionId = 'collectionId'

    // mock getGranules
    const getGranulesMock = jest.spyOn(actions, 'getGranules')
    getGranulesMock.mockImplementation(() => jest.fn())

    // mockStore with initialState
    const store = mockStore({
      authToken: '',
      focusedCollection: collectionId,
      metadata: {
        collections: {
          allIds: []
        }
      },
      searchResults: {
        granules: {}
      }
    })

    // call the dispatch
    await store.dispatch(actions.getFocusedCollection()).then(() => {
      const storeActions = store.getActions()
      expect(storeActions[0]).toEqual({
        type: UPDATE_GRANULE_QUERY,
        payload: { pageNum: 1 }
      })
      expect(storeActions[1]).toEqual({
        type: UPDATE_AUTH,
        payload: ''
      })
      // updateCollectionMetadata
      expect(storeActions[2]).toEqual({
        type: UPDATE_COLLECTION_METADATA,
        payload: getCollectionsResponseUnauth
      })
    })

    // was getGranules called
    expect(getGranulesMock).toHaveBeenCalledTimes(1)
  })

  test('should update the authenticated focusedCollection and call getGranules', async () => {
    moxios.stubRequest(/3001\/collections\/json/, {
      status: 200,
      response: {
        feed: {
          updated: '2019-03-27T20:21:14.705Z',
          id: 'https://cmr.sit.earthdata.nasa.gov:443/search/collections.json?params_go_here',
          title: 'ECHO dataset metadata',
          entry: [{
            id: 'collectionId1',
            short_name: 'id_1',
            version_id: 'VersionID'
          }],
          facets: {},
          hits: 1
        }
      },
      headers: {
        'cmr-hits': 1,
        'jwt-token': 'token'
      }
    })

    moxios.stubRequest(/3001\/collections\/umm_json/, {
      status: 200,
      response: {
        hits: 1,
        took: 234,
        items: [{
          meta: {
            'concept-id': 'collectionId1'
          },
          umm: {
            data: 'collectionId1'
          }
        }]
      },
      headers: {
        'cmr-hits': 1,
        'jwt-token': 'token'
      }
    })

    const collectionId = 'collectionId'

    // mock getGranules
    const getGranulesMock = jest.spyOn(actions, 'getGranules')
    getGranulesMock.mockImplementation(() => jest.fn())

    // mockStore with initialState
    const store = mockStore({
      authToken: 'token',
      focusedCollection: collectionId,
      metadata: {
        collections: {
          allIds: []
        }
      },
      searchResults: {
        granules: {}
      }
    })

    // call the dispatch
    await store.dispatch(actions.getFocusedCollection()).then(() => {
      const storeActions = store.getActions()
      expect(storeActions[0]).toEqual({
        type: UPDATE_GRANULE_QUERY,
        payload: { pageNum: 1 }
      })
      expect(storeActions[1]).toEqual({
        type: UPDATE_AUTH,
        payload: 'token'
      })
      // updateCollectionMetadata
      expect(storeActions[2]).toEqual({
        type: UPDATE_COLLECTION_METADATA,
        payload: getCollectionsResponseAuth
      })
    })

    // was getGranules called
    expect(getGranulesMock).toHaveBeenCalledTimes(1)
  })

  test('should not call getGranules is previous granules are used', async () => {
    moxios.stubRequest(/search\/collections\.json/, {
      status: 200,
      response: {
        feed: {
          updated: '2019-03-27T20:21:14.705Z',
          id: 'https://cmr.sit.earthdata.nasa.gov:443/search/collections.json?params_go_here',
          title: 'ECHO dataset metadata',
          entry: [{
            id: 'collectionId1',
            short_name: 'id_1',
            version_id: 'VersionID'
          }],
          facets: {},
          hits: 1
        }
      },
      headers: {
        'cmr-hits': 1
      }
    })

    moxios.stubRequest(/search\/collections\.umm_json/, {
      status: 200,
      response: {
        hits: 1,
        took: 234,
        items: [{
          meta: {
            'concept-id': 'collectionId1'
          },
          umm: {
            data: 'collectionId1'
          }
        }]
      },
      headers: {
        'cmr-hits': 1
      }
    })

    const collectionId = 'collectionId'

    // mock getGranules
    const getGranulesMock = jest.spyOn(actions, 'getGranules')
    getGranulesMock.mockImplementation(() => jest.fn())

    // mockStore with initialState
    const granules = {
      allIds: ['granule1'],
      byId: {
        granule1: {
          mock: 'data'
        }
      }
    }
    const store = mockStore({
      authToken: '',
      focusedCollection: collectionId,
      metadata: {
        collections: {
          allIds: []
        }
      },
      searchResults: {
        granules
      }
    })

    // call the dispatch
    await store.dispatch(actions.getFocusedCollection()).then(() => {
      const storeActions = store.getActions()
      expect(storeActions[0]).toEqual({
        type: UPDATE_GRANULE_QUERY,
        payload: { pageNum: 1 }
      })
      expect(storeActions[1]).toEqual({
        type: UPDATE_AUTH,
        payload: ''
      })
      // updateCollectionMetadata
      expect(storeActions[2]).toEqual({
        type: UPDATE_COLLECTION_METADATA,
        payload: getCollectionsResponseUnauth
      })
    })

    // was getGranules called
    expect(getGranulesMock).toHaveBeenCalledTimes(0)
  })

  test('returns no result if there is no focusedCollection', () => {
    const store = mockStore({
      focusedCollection: '',
      searchResults: {
        granules: {}
      }
    })

    store.dispatch(actions.getFocusedCollection())
    const storeActions = store.getActions()

    expect(storeActions[0]).toEqual({
      type: UPDATE_GRANULE_QUERY,
      payload: { pageNum: 1 }
    })
    expect(storeActions[1]).toEqual({
      type: UPDATE_GRANULE_RESULTS,
      payload: { results: [] }
    })
  })

  test('does not call updateFocusedCollection on error', async () => {
    moxios.stubRequest(/collections.*/, {
      status: 500,
      response: {}
    })

    const store = mockStore({
      authToken: '',
      focusedCollection: 'collectionId',
      metadata: {
        collections: {
          allIds: []
        }
      },
      searchResults: {
        granules: {}
      }
    })

    const consoleMock = jest.spyOn(console, 'log').mockImplementation(() => jest.fn())

    await store.dispatch(actions.getFocusedCollection('')).then(() => {
      expect(consoleMock).toHaveBeenCalledTimes(1)
    })
  })
})
