import { isEmpty } from 'lodash'
import moment from 'moment'

import { getValueForTag } from '../../../../../sharedUtils/tags'
import { mbr } from '../map/mbr'
import projections from '../map/projections'

const spatialMbr = (spatial) => {
  const {
    boundingBox = [],
    circle = [],
    point = [],
    polygon = []
  } = spatial

  // Find the minimum bounding rectangle to use for spatial
  return mbr({
    boundingBox: boundingBox[0],
    circle: circle[0],
    point: point[0],
    polygon: polygon[0]
  })
}

/**
 * Returns the value for a given UMM-T handoff input
 * @param {Object} params
 * @param {Object} params.collectionMetadata Collection metadata from CMR
 * @param {Object} params.collectionQuery Collection Query data from Redux
 * @param {Object} params.handoffInput UMM-T handoff query input
 * @param {Object} params.handoffs Handoffs data from from Redux
 */
export const getHandoffValue = ({
  collectionMetadata = {},
  collectionQuery = {},
  handoffInput,
  handoffs,
  mapProjection
}) => {
  const {
    valueType
  } = handoffInput

  const {
    temporal = {},
    spatial = {}
  } = collectionQuery

  const { endDate, startDate } = temporal

  let value

  // Bounding box value
  if (valueType === 'https://schema.org/box' && !isEmpty(spatial)) {
    const {
      swLat,
      swLng,
      neLat,
      neLng
    } = spatialMbr(spatial)

    value = `${swLng},${swLat},${neLng},${neLat}`
  }

  // Bounding box values used in open altimetry
  if (valueType === 'minx' && !isEmpty(spatial)) {
    const { swLng } = spatialMbr(spatial)
    value = swLng
  }
  if (valueType === 'miny' && !isEmpty(spatial)) {
    const { swLat } = spatialMbr(spatial)
    value = swLat
  }
  if (valueType === 'maxx' && !isEmpty(spatial)) {
    const { neLng } = spatialMbr(spatial)
    value = neLng
  }
  if (valueType === 'maxy' && !isEmpty(spatial)) {
    const { neLat } = spatialMbr(spatial)
    value = neLat
  }

  // Start Time value
  if (valueType === 'https://schema.org/startDate' && startDate) {
    value = moment.utc(startDate).toISOString()
  }
  // Start date value
  if (valueType === 'startDate' && startDate) {
    value = moment.utc(startDate).format('YYYY-MM-DD')
  }

  // End Time value
  if (valueType === 'https://schema.org/endDate' && endDate) {
    value = moment.utc(endDate).toISOString()
  }
  // End Date value
  if (valueType === 'endDate' && endDate) {
    value = moment.utc(endDate).format('YYYY-MM-DD')
  }

  // Layers value
  if (valueType === 'https://wiki.earthdata.nasa.gov/display/GIBS/GIBS+API+for+Developers#GIBSAPIforDevelopers-LayerNaming') {
    // There is SOTO specific logic here. In the future this might need to be more generic, or the name
    // of the handoff passed in to this util function
    const { sotoLayers = [] } = handoffs
    const { tags } = collectionMetadata
    const gibsOptions = getValueForTag('gibs', tags)

    if (gibsOptions) {
      const gibsLayers = gibsOptions.map(data => data.product)

      // Filter out layers that are not included in SOTO's capabilities
      const includedSotoLayers = gibsLayers.filter(layer => sotoLayers.includes(layer))

      // In order for the layers in SOTO to be active when the user is handed off, `(la=true)` needs to be
      // added to each layer in the URL
      value = includedSotoLayers.map(data => `${data}(la=true)`)
    }
  }

  // Data Keyword value (probably needs a different valueType after Giovanni UMM-T exists)
  if (valueType === 'shortName') {
    const { shortName } = collectionMetadata
    value = shortName
  }

  // Map projection value, translate to descriptive name from epsg value
  if (valueType === 'mapProjection') {
    switch (mapProjection) {
      case projections.arctic:
        value = 'arctic'
        break
      case projections.antarctic:
        value = 'antarctic'
        break
      default:
        value = 'geographic'
    }
  }

  return value
}
