import {
  MASTER_OVERLAY_PANEL_DRAG_END,
  MASTER_OVERLAY_PANEL_DRAG_START,
  MASTER_OVERLAY_PANEL_UPDATE_RESIZE,
  GRANULE_RESULTS_PANEL_UPDATE_SORT_ORDER,
  GRANULE_RESULTS_PANEL_UPDATE_SEARCH_VALUE
} from '../constants/actionTypes'

const initialState = {
  masterOverlayPanel: {
    clickStartHeight: undefined,
    clickStartY: undefined,
    dragging: false,
    height: 300
  },
  granuleResultsPanel: {
    sortOrder: 'start_date_newest_first',
    searchValue: ''
  }
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MASTER_OVERLAY_PANEL_DRAG_START: {
      return {
        ...state,
        masterOverlayPanel: {
          ...state.masterOverlayPanel,
          clickStartHeight: action.payload.clickStartHeight,
          clickStartY: action.payload.clickStartY,
          dragging: true
        }
      }
    }
    case MASTER_OVERLAY_PANEL_DRAG_END: {
      return {
        ...state,
        masterOverlayPanel: {
          ...state.masterOverlayPanel,
          clickStartHeight: undefined,
          clickStartY: undefined,
          dragging: false
        }
      }
    }
    case MASTER_OVERLAY_PANEL_UPDATE_RESIZE: {
      return {
        ...state,
        masterOverlayPanel: {
          ...state.masterOverlayPanel,
          height: action.payload
        }
      }
    }
    case GRANULE_RESULTS_PANEL_UPDATE_SORT_ORDER: {
      return {
        ...state,
        granuleResultsPanel: {
          ...state.granuleResultsPanel,
          sortOrder: action.payload
        }
      }
    }
    case GRANULE_RESULTS_PANEL_UPDATE_SEARCH_VALUE: {
      return {
        ...state,
        granuleResultsPanel: {
          ...state.granuleResultsPanel,
          searchValue: action.payload
        }
      }
    }
    default:
      return state
  }
}

export default uiReducer
