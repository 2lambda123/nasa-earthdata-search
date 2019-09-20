import { getDbConnection } from '../util/database/getDbConnection'

/**
 * Retrieve single colormap record from the database
 * @param {Object} event Details about the HTTP request that it received
 * @param {Object} context Methods and properties that provide information about the invocation, function, and execution environment
 */
export default async function getColorMap(event, context) {
  try {
    // https://stackoverflow.com/questions/49347210/why-aws-lambda-keeps-timing-out-when-using-knex-js
    // eslint-disable-next-line no-param-reassign
    context.callbackWaitsForEmptyEventLoop = false

    const { product: providedProduct } = event.pathParameters

    // Retrieve a connection to the database
    const dbConnection = await getDbConnection()

    const colorMapResponse = await dbConnection('colormaps')
      .first('jsondata')
      .where({ product: providedProduct })

    if (colorMapResponse) {
      return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(colorMapResponse.jsondata)
      }
    }

    return {
      isBase64Encoded: false,
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({ errors: [`ColorMap '${providedProduct}' not found.`] })
    }
  } catch (e) {
    console.log(e)

    return {
      isBase64Encoded: false,
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true

      },
      body: JSON.stringify({ errors: [e] })
    }
  }
}
