import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import actions from '../index'
import { updateFocusedGranule } from '../focusedGranule'
import {
  UPDATE_FOCUSED_GRANULE,
  UPDATE_GRANULE_METADATA,
  UPDATE_AUTH
} from '../../constants/actionTypes'

const mockStore = configureMockStore([thunk])

beforeEach(() => {
  jest.clearAllMocks()
  jest.restoreAllMocks()
})

describe('updateFocusedGranule', () => {
  test('should create an action to update the focused collection', () => {
    const payload = 'granuleId'
    const expectedAction = {
      type: UPDATE_FOCUSED_GRANULE,
      payload
    }
    expect(updateFocusedGranule(payload)).toEqual(expectedAction)
  })
})

describe('changeFocusedGranule', () => {
  test('it should update the focusedGranule and call getFocusedGranule', () => {
    const granuleId = 'granuleId'

    // mock getFocusedGranule
    const getFocusedGranuleMock = jest.spyOn(actions, 'getFocusedGranule')
    getFocusedGranuleMock.mockImplementation(() => jest.fn())

    // mockStore with initialState
    const store = mockStore({
      focusedGranule: ''
    })

    // call the dispatch
    store.dispatch(actions.changeFocusedGranule(granuleId))

    // Is updateFocusedGranule called with the right payload
    const storeActions = store.getActions()
    expect(storeActions[0]).toEqual({
      type: UPDATE_FOCUSED_GRANULE,
      payload: granuleId
    })

    // was getCollections called
    expect(getFocusedGranuleMock).toHaveBeenCalledTimes(1)
  })
})

describe('getFocusedGranule', () => {
  const granulePayload = {
    granuleId: {
      json: {
        MockGranule: 'Data'
      },
      metadataUrls: {
        atom: {
          href: 'https://cmr.earthdata.nasa.gov/search/concepts/granuleId.atom',
          title: 'ATOM'
        },
        echo10: {
          href: 'https://cmr.earthdata.nasa.gov/search/concepts/granuleId.echo10',
          title: 'ECHO 10'
        },
        iso19115: {
          href: 'https://cmr.earthdata.nasa.gov/search/concepts/granuleId.iso19115',
          title: 'ISO 19115'
        },
        native: {
          href: 'https://cmr.earthdata.nasa.gov/search/concepts/granuleId',
          title: 'Native'
        },
        umm_json: {
          href: 'https://cmr.earthdata.nasa.gov/search/concepts/granuleId.umm_json',
          title: 'UMM-G'
        }
      },
      xml: '<MockGranule>Data</MockGranule>'
    }
  }

  beforeEach(() => {
    moxios.install()

    jest.clearAllMocks()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('should update the granule metadata', async () => {
    const metadata = '<MockGranule>Data</MockGranule>'

    moxios.stubRequest(/gov\/search\/concepts.*/, {
      status: 200,
      response: metadata
    })

    const granuleId = 'granuleId'

    // mockStore with initialState
    const store = mockStore({
      authToken: '',
      focusedGranule: granuleId,
      metadata: {
        granules: {
          allIds: [],
          byId: {}
        }
      }
    })

    // call the dispatch
    await store.dispatch(actions.getFocusedGranule()).then(() => {
      const storeActions = store.getActions()

      // updateGranuleMetadata
      expect(storeActions[0]).toEqual({
        type: UPDATE_AUTH,
        payload: ''
      })
      expect(storeActions[1]).toEqual({
        type: UPDATE_GRANULE_METADATA,
        payload: granulePayload
      })
    })
  })

  test('should update the authenticated granule metadata', async () => {
    const metadata = '<MockGranule>Data</MockGranule>'

    moxios.stubRequest(/3000\/concepts.*/, {
      status: 200,
      response: metadata,
      headers: {
        'jwt-token': 'token'
      }
    })

    const granuleId = 'granuleId'

    // mockStore with initialState
    const store = mockStore({
      authToken: 'token',
      focusedGranule: granuleId,
      metadata: {
        granules: {
          allIds: [],
          byId: {}
        }
      }
    })

    // call the dispatch
    await store.dispatch(actions.getFocusedGranule()).then(() => {
      const storeActions = store.getActions()

      // updateGranuleMetadata
      expect(storeActions[0]).toEqual({
        type: UPDATE_AUTH,
        payload: 'token'
      })
      expect(storeActions[1]).toEqual({
        type: UPDATE_GRANULE_METADATA,
        payload: granulePayload
      })
    })
  })

  test('should not call updateGranuleMetadata if granule already exists', () => {
    const granuleId = 'granuleId'

    // mockStore with initialState
    const granules = {
      allIds: ['granuleId'],
      byId: {
        granuleId: {
          mock: 'data'
        }
      }
    }
    const store = mockStore({
      focusedGranule: granuleId,
      metadata: {
        granules
      }
    })

    // call the dispatch
    store.dispatch(actions.getFocusedGranule())
    const storeActions = store.getActions()
    expect(storeActions.length).toBe(0)
  })

  test('returns no result if there is no focusedGranule', () => {
    const store = mockStore({
      focusedGranule: ''
    })

    store.dispatch(actions.getFocusedGranule())
    const storeActions = store.getActions()

    expect(storeActions.length).toBe(0)
  })

  test('does not call updateGranuleMetadata on error', async () => {
    moxios.stubRequest(/concept.*/, {
      status: 500,
      response: {}
    })

    const store = mockStore({
      focusedGranule: 'granuleId',
      metadata: {
        granules: {
          allIds: [],
          byId: {}
        }
      }
    })

    const consoleMock = jest.spyOn(console, 'error').mockImplementation(() => jest.fn())

    await store.dispatch(actions.getFocusedGranule()).then(() => {
      expect(consoleMock).toHaveBeenCalledTimes(1)
    })
  })
})
