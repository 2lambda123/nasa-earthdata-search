export const emptyDecodedResult = {
  collections: undefined,
  cmrFacets: {
    data_center_h: undefined,
    instrument_h: undefined,
    platform_h: undefined,
    processing_level_id_h: undefined,
    project_h: undefined,
    science_keywords_h: undefined
  },
  featureFacets: {
    customizable: false,
    mapImagery: false,
    nearRealTime: false
  },
  focusedCollection: undefined,
  focusedGranule: undefined,
  map: {},
  project: undefined,
  query: {
    collection: {
      gridName: undefined,
      keyword: undefined,
      overrideTemporal: {},
      spatial: {
        boundingBox: undefined,
        point: undefined,
        polygon: undefined
      },
      temporal: {},
      hasGranulesOrCwic: true
    },
    granule: {
      gridCoords: undefined
    }
  },
  shapefile: {
    shapefileId: undefined
  },
  timeline: undefined
}

export default emptyDecodedResult
