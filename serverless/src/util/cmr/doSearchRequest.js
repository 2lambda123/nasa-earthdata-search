import request from 'request-promise'
import { prepareExposeHeaders } from './prepareExposeHeaders'
import { getClientId } from '../../../../sharedUtils/config'
import { getEchoToken } from '../urs/getEchoToken'

/**
 * Performs a search request and returns the result body and the JWT
 * @param {string} jwtToken JWT returned from edlAuthorizer
 * @param {string} url URL for to perform search
 */
export const doSearchRequest = async (jwtToken, url) => {
  try {
    const response = await request.get({
      uri: url,
      json: true,
      resolveWithFullResponse: true,
      headers: {
        'Client-Id': getClientId().lambda,
        'Echo-Token': await getEchoToken(jwtToken)
      }
    })

    const { body, headers } = response

    return {
      statusCode: response.statusCode,
      headers: {
        'cmr-hits': headers['cmr-hits'],
        'cmr-took': headers['cmr-took'],
        'cmr-request-id': headers['cmr-request-id'],
        'access-control-allow-origin': headers['access-control-allow-origin'],
        'access-control-expose-headers': prepareExposeHeaders(headers),
        'jwt-token': jwtToken
      },
      body: JSON.stringify(body)
    }
  } catch (e) {
    console.log('error', e)

    if (e.response) {
      return {
        statusCode: e.statusCode,
        body: JSON.stringify({ errors: [e.response.body], statusCode: e.statusCode })
      }
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ errors: ['Unexpected error encountered!', e] })
    }
  }
}
