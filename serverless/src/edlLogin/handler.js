import { getEdlConfig } from '../util/configUtil'
import { cmrEnv } from '../../../sharedUtils/cmrEnv'
import { getEarthdataConfig, getEnvironmentConfig } from '../../../sharedUtils/config'
import { isWarmUp } from '../util/isWarmup'

/**
 * Redirects the user to the correct EDL login URL
 * @param {Object} event Details about the HTTP request that it received
 * @param {Object} context Methods and properties that provide information about the invocation, function, and execution environment
 */
const edlLogin = async (event) => {
  // Prevent execution if the event source is the warmer
  if (await isWarmUp(event)) return false

  const params = event.queryStringParameters

  const { state } = params

  // The client id is part of our Earthdata Login credentials
  const edlConfig = await getEdlConfig()
  const { client } = edlConfig
  const { id: clientId } = client

  const {
    edlHost,
    redirectUriPath
  } = getEarthdataConfig(cmrEnv())

  const { apiHost } = getEnvironmentConfig()
  const redirectUri = `${apiHost}${redirectUriPath}`

  return {
    statusCode: 307,
    headers: {
      Location: `${edlHost}/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${encodeURIComponent(state)}`
    }
  }
}

export default edlLogin
