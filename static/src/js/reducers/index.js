import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import collectionsReducer from './collections'
import facetsReducer from './facets'
import {
  cmrFacetsReducer,
  featureFacetsReducer,
  viewAllFacetsReducer
} from './facetsParams'
import focusedCollectionReducer from './focusedCollection'
import granulesReducer from './granules'
import mapReducer from './map'
import queryReducer from './query'
import uiReducer from './ui'
import timelineReducer from './timeline'
import viewAllFacetsRequestReducer from './viewAllFacets'

export default history => combineReducers({
  entities: combineReducers({
    collections: collectionsReducer,
    facets: facetsReducer,
    granules: granulesReducer,
    viewAllFacets: viewAllFacetsRequestReducer
  }),
  facetsParams: combineReducers({
    feature: featureFacetsReducer,
    cmr: cmrFacetsReducer,
    viewAll: viewAllFacetsReducer
  }),
  focusedCollection: focusedCollectionReducer,
  map: mapReducer,
  query: queryReducer,
  router: connectRouter(history),
  timeline: timelineReducer,
  ui: uiReducer
})
