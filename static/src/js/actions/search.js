import { isEqual } from 'lodash'
import actions from './index'
import { UPDATE_COLLECTION_QUERY, UPDATE_GRANULE_QUERY } from '../constants/actionTypes'
import { clearExcludedGranules } from './granules'

export const updateCollectionQuery = payload => ({
  type: UPDATE_COLLECTION_QUERY,
  payload
})

export const updateGranuleQuery = payload => ({
  type: UPDATE_GRANULE_QUERY,
  payload
})

export const changeQuery = newQuery => (dispatch, getState) => {
  // Pull out the values from the query being changed
  const { collection } = newQuery
  const {
    gridName,
    spatial,
    temporal,
    overideTemporal
  } = collection

  // Pull out data from the store to compare to, if there are changes we should clear the excluded granules
  const { query } = getState()
  const { collection: collectionQuery = {} } = query
  const {
    gridName: gridNameQuery,
    spatial: spatialQuery,
    temporal: temporalQuery,
    overrideTemporal: overrideTemporalQuery
  } = collectionQuery

  if ((!isEqual(gridName, gridNameQuery))
    || (!isEqual(spatial, spatialQuery))
    || (!isEqual(temporal, temporalQuery))
    || (!isEqual(overideTemporal, overrideTemporalQuery))
  ) {
    dispatch(clearExcludedGranules())
  }

  if (newQuery.collection) {
    dispatch(updateCollectionQuery({
      pageNum: 1,
      ...newQuery.collection
    }))
  }

  dispatch(updateGranuleQuery({
    pageNum: 1,
    ...newQuery.granule
  }))

  // Remove all saved granules in the metadata/collections store
  dispatch(actions.clearCollectionGranules())
  // If the collection query didn't change don't get new collections
  if (newQuery.collection) dispatch(actions.getCollections())
  dispatch(actions.getGranules())
  dispatch(actions.getTimeline())
}

export const changeProjectQuery = query => (dispatch) => {
  dispatch(updateCollectionQuery(query.collection))
  dispatch(actions.getProjectCollections())
}

export const changeCollectionPageNum = pageNum => (dispatch) => {
  dispatch(updateCollectionQuery({ pageNum }))
  dispatch(actions.getCollections())
}

export const changeGranulePageNum = pageNum => (dispatch) => {
  dispatch(updateGranuleQuery({ pageNum }))
  dispatch(actions.getGranules())
}

export const changeGranuleGridCoords = gridCoords => (dispatch) => {
  dispatch(updateGranuleQuery({ gridCoords }))
  dispatch(actions.getGranules())
}

export const removeGridFilter = () => (dispatch) => {
  dispatch(changeQuery({
    collection: {
      gridName: ''
    },
    granule: {
      gridCoords: ''
    }
  }))
  dispatch(actions.toggleSelectingNewGrid(false))
}

export const removeSpatialFilter = () => (dispatch) => {
  dispatch(changeQuery({
    collection: {
      spatial: {}
    }
  }))
  dispatch(actions.toggleDrawingNewLayer(false))
  dispatch(actions.updateShapefile({
    shapefileName: undefined,
    shapefileId: undefined,
    shapefileSize: undefined,
    shapefileError: false
  }))
}

export const removeTemporalFilter = () => (dispatch) => {
  dispatch(changeQuery({
    collection: {
      temporal: {}
    }
  }))
}

export const clearFilters = () => (dispatch) => {
  const query = {
    collection: {
      gridName: '',
      keyword: '',
      spatial: {},
      temporal: {}
    },
    granule: {
      gridCoords: ''
    }
  }

  // Update Store
  dispatch(changeQuery(query))
  dispatch(actions.updateShapefile({
    shapefileName: undefined,
    shapefileId: undefined,
    shapefileSize: undefined
  }))
}
