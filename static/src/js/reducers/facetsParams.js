const initialCmrState = {
  science_keywords_h: undefined,
  platform_h: undefined,
  instrument_h: undefined,
  data_center_h: undefined,
  project_h: undefined,
  processing_level_id_h: undefined
}

const initialFeatureState = {
  mapImagery: false,
  nearRealTime: false,
  customizable: false
}

export const cmrFacetsReducer = (state = initialCmrState, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_CMR_FACET': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'REMOVE_SELECTED_CMR_FACET': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export const featureFacetsReducer = (state = initialFeatureState, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_FEATURE_FACET': {
      return {
        ...state,
        ...action.payload
      }
    }
    case 'REMOVE_SELECTED_FEATURE_FACET': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
