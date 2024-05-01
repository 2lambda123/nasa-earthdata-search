import axios from 'axios'
import { getEarthdataConfig } from '../../../../../sharedUtils/config'
import { getSystemToken } from '../../../util/urs/getSystemToken'
import { requestTimeout } from '../../../util/requestTimeout'
import { deployedEnvironment } from '../../../../../sharedUtils/deployedEnvironment'

/**
 * Retrieve the CMR metadata for the provided concept id
 * @param {String} conceptId A collection or granule concept-id
 * @param {String} earthdataEnvironment The Earthdata Environment to retrieve concepts from
 * @returns {JSON} The collection metadata associated with the provided concept id
 */
export const fetchCmrConcept = async (conceptId, earthdataEnvironment) => {
  const headers = {}
  const DeployedEnv = deployedEnvironment()
  console.log('🚀 ~ file: fetchCmrConcept.js:16 ~ fetchCmrConcept ~ DeployedEnv:', DeployedEnv)

  // TODO This value with ee params is not getting updated to the correct endpoint
  // const earthdataEnvironment = determineEarthdataEnvironment()
  console.log('🚀 ~ file: fetchCmrConcept.js:15 ~ fetchCmrConcept ~ earthdataEnvironment:', earthdataEnvironment)
  const ee = getEarthdataConfig(earthdataEnvironment)
  console.log('🚀 ~ file: fetchCmrConcept.js:16 ~ fetchCmrConcept ~ ee:', ee)

  const retrieveSystemToken = earthdataEnvironment === deployedEnvironment()
  console.log('🚀 ~ file: fetchCmrConcept.js:25 ~ fetchCmrConcept ~ retrieveSystemToken:', retrieveSystemToken)

  // Do not retrieve system token if offline or using the `ee` params to query other CMR envs
  if (!process.env.IS_OFFLINE && (retrieveSystemToken)) {
    console.log('Retrieving System token for collection image')
    const cmrToken = await getSystemToken()
    headers.Authorization = `${cmrToken}`
  }

  const conceptUrl = `${getEarthdataConfig(earthdataEnvironment).cmrHost}/search/concepts/${conceptId}.json`
  try {
    // Retrieve concept
    const response = await axios({
      url: conceptUrl,
      method: 'get',
      headers,
      timeout: requestTimeout()
    })

    const {
      data: responseData
    } = response

    return responseData
  } catch (error) {
    const { response } = error
    const { data: errorMessage } = response
    console.log(`Error fetching concept ${conceptId} - ${JSON.stringify(errorMessage)}`)

    return errorMessage
  }
}
