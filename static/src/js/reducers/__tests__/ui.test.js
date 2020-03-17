import uiReducer from '../ui'
import {
  TOGGLE_ABOUT_CWIC_MODAL,
  TOGGLE_ADVANCED_SEARCH_MODAL,
  TOGGLE_CHUNKED_ORDER_MODAL,
  TOGGLE_OVERRIDE_TEMPORAL_MODAL,
  TOGGLE_RELATED_URLS_MODAL,
  TOGGLE_SECONDARY_OVERLAY_PANEL,
  TOGGLE_SHAPEFILE_UPLOAD_MODAL,
  TOGGLE_TOO_MANY_POINTS_MODAL,
  TOGGLE_VIEW_ALL_FACETS_MODAL,
  TOGGLE_SPATIAL_POLYGON_WARNING
} from '../../constants/actionTypes'

const initialState = {
  facetsModal: {
    isOpen: false
  },
  granuleResultsPanel: {
    sortOrder: '-start_date',
    searchValue: ''
  },
  grid: {
    selectingNewGrid: false
  },
  map: {
    drawingNewLayer: false
  },
  overrideTemporalModal: {
    isOpen: false
  },
  relatedUrlsModal: {
    isOpen: false
  },
  secondaryOverlayPanel: {
    isOpen: false
  },
  advancedSearchModal: {
    isOpen: false
  },
  shapefileUploadModal: {
    isOpen: false
  },
  tooManyPointsModal: {
    isOpen: false
  },
  chunkedOrderModal: {
    isOpen: false
  },
  aboutCwicModal: {
    isOpen: false
  },
  spatialPolygonWarning: {
    isDisplayed: false
  }
}

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' }

    expect(uiReducer(undefined, action)).toEqual(initialState)
  })
})

describe('TOGGLE_VIEW_ALL_FACETS_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_VIEW_ALL_FACETS_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      facetsModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_OVERRIDE_TEMPORAL_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_OVERRIDE_TEMPORAL_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      overrideTemporalModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_RELATED_URLS_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_RELATED_URLS_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      relatedUrlsModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_SHAPEFILE_UPLOAD_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_SHAPEFILE_UPLOAD_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      shapefileUploadModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_SECONDARY_OVERLAY_PANEL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_SECONDARY_OVERLAY_PANEL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      secondaryOverlayPanel: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_ADVANCED_SEARCH_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_ADVANCED_SEARCH_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      advancedSearchModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_TOO_MANY_POINTS_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_TOO_MANY_POINTS_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      tooManyPointsModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_CHUNKED_ORDER_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_CHUNKED_ORDER_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      chunkedOrderModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_ABOUT_CWIC_MODAL', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_ABOUT_CWIC_MODAL,
      payload: true
    }

    const expectedState = {
      ...initialState,
      aboutCwicModal: { isOpen: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})

describe('TOGGLE_SPATIAL_POLYGON_WARNING', () => {
  test('returns the correct state', () => {
    const action = {
      type: TOGGLE_SPATIAL_POLYGON_WARNING,
      payload: true
    }

    const expectedState = {
      ...initialState,
      spatialPolygonWarning: { isDisplayed: true }
    }

    expect(uiReducer(undefined, action)).toEqual(expectedState)
  })
})
