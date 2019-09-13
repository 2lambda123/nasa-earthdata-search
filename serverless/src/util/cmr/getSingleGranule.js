import request from 'request-promise'
import { stringify } from 'qs'
import { readCmrResults } from './readCmrResults'
import { getEarthdataConfig, getClientId } from '../../../../sharedUtils/config'
import { cmrEnv } from '../../../../sharedUtils/cmrEnv'

/**
 * Retrieves a single granule result from CMR
 * @param {String} collectionId CMR Collection ID
 */
export const getSingleGranule = async (cmrToken, collectionId) => {
  const cmrParams = {
    echo_collection_id: collectionId,
    page_num: 1,
    page_size: 1
  }

  try {
    const granuleSearchUrl = `${getEarthdataConfig(cmrEnv()).cmrHost}/search/granules.json?${stringify(cmrParams)}`

    const cmrResponse = await request.get({
      uri: granuleSearchUrl,
      json: true,
      resolveWithFullResponse: true,
      headers: {
        'Client-Id': getClientId().background,
        'Echo-Client': cmrToken
      }
    })
    const responseBody = readCmrResults(granuleSearchUrl, cmrResponse)

    return responseBody[0]
  } catch (e) {
    console.log(`Failed retrieving a single granule for ${collectionId}`)
    console.log(e)
  }

  return null
}
