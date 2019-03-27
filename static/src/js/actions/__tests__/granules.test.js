import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// import actions from '../index'
import {
  updateGranules,
  getGranules
} from '../granules'
import { UPDATE_GRANULES } from '../../constants/actionTypes'

const mockStore = configureMockStore([thunk])

describe('updateGranules', () => {
  test('should create an action to update the search query', () => {
    const payload = []
    const expectedAction = {
      type: UPDATE_GRANULES,
      payload
    }
    expect(updateGranules(payload)).toEqual(expectedAction)
  })
})

describe('getGranules', () => {
  beforeEach(() => {
    moxios.install()

    jest.clearAllMocks()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('calls the API to get granules', async () => {
    moxios.stubRequest(/granules.*/, {
      status: 200,
      response: {
        feed: {
          updated: '2019-03-27T20:21:14.705Z',
          id: 'https://cmr.sit.earthdata.nasa.gov:443/search/granules.json?echo_collection_id=collectionId',
          title: 'ECHO granule metadata',
          entry: [{
            mockGranuleData: 'goes here'
          }]
        }
      }
    })

    // mockStore with initialState
    const store = mockStore({ focusedCollection: 'collectionId' })

    // call the dispatch
    await store.dispatch(getGranules()).then(() => {
      // Is updateGranules called with the right payload
      const storeActions = store.getActions()
      expect(storeActions[0]).toEqual({
        type: UPDATE_GRANULES,
        payload: {
          collectionId: 'collectionId',
          results: [{
            mockGranuleData: 'goes here'
          }]
        }
      })
    })
  })

  test('returns no results if there is no focused collection', () => {
    const store = mockStore()

    store.dispatch(getGranules())
    const storeActions = store.getActions()
    expect(storeActions[0]).toEqual({
      type: UPDATE_GRANULES,
      payload: {
        results: []
      }
    })
  })

  test('does not call updateGranules on error', async () => {
    moxios.stubRequest(/granules.*/, {
      status: 500,
      response: {}
    })

    const store = mockStore({ focusedCollection: 'collectionId' })

    const consoleMock = jest.spyOn(console, 'log').mockImplementation(() => jest.fn())

    await store.dispatch(getGranules()).then(() => {
      expect(consoleMock).toHaveBeenCalledTimes(1)
    })
  })
})
