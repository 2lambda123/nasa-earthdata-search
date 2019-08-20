import { buildURL } from '../util/cmr/buildUrl'
import { doSearchRequest } from '../util/cmr/doSearchRequest'
import { getJwtToken } from '../util/getJwtToken'
import { isWarmUp } from '../util/isWarmup'

/**
 * Returns the keys permitted by cmr based on the request format
 * @param {String} format Format of the request (extension i.e. json or umm_json)
 */
function getPermittedCmrKeys(format) {
  if (format === 'umm_json') {
    return [
      'concept_id'
    ]
  }

  return [
    'bounding_box',
    'collection_data_type',
    'concept_id',
    'data_center_h',
    'data_center',
    'echo_collection_id',
    'facets_size',
    'format',
    'has_granules_or_cwic',
    'has_granules',
    'include_facets',
    'include_granule_counts',
    'include_has_granules',
    'include_tags',
    'instrument_h',
    'keyword',
    'line',
    'options',
    'page_num',
    'page_size',
    'platform_h',
    'point',
    'polygon',
    'processing_level_id_h',
    'project_h',
    'project',
    'science_keywords_h',
    'sort_key',
    'tag_key',
    'temporal',
    'two_d_coordinate_system'
  ]
}

/**
 * Handler to perform an authenticated CMR Collection search
 */
const collectionSearch = async (event) => {
  // Prevent execution if the event source is the warmer
  if (await isWarmUp(event)) return false

  const { body, pathParameters } = event
  const { format } = pathParameters

  // Whitelist parameters supplied by the request
  const permittedCmrKeys = getPermittedCmrKeys(format)

  const nonIndexedKeys = [
    'collection_data_type',
    'concept_id',
    'data_center_h',
    'instrument_h',
    'platform_h',
    'processing_level_id_h',
    'project_h',
    'sort_key',
    'tag_key'
  ]

  return doSearchRequest(getJwtToken(event), buildURL({
    body,
    nonIndexedKeys,
    path: `/search/collections.${format}`,
    permittedCmrKeys
  }))
}

export default collectionSearch
