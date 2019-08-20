import 'array-foreach-async'
import request from 'request-promise'
import { getDbConnection } from '../util/database/getDbConnection'
import { getSystemToken } from '../util/urs/getSystemToken'
import { getEarthdataConfig, getClientId } from '../../../sharedUtils/config'
import { getStateFromOrderStatus } from '../../../sharedUtils/orderStatus'
import { cmrEnv } from '../../../sharedUtils/cmrEnv'

// Knex database connection object
let dbConnection = null

let cmrToken

const fetchLegacyServicesOrder = async (input) => {
  dbConnection = await getDbConnection(dbConnection)
  cmrToken = await getSystemToken(cmrToken)

  // Destructure the payload from step function input
  const {
    accessToken,
    id,
    orderType
  } = input

  // Fetch the retrieval id that the order belongs to so that we can provide a link to the status page
  const retrievalRecord = await dbConnection('retrieval_orders')
    .first(
      'retrieval_orders.order_number'
    )
    .join('retrieval_collections', { 'retrieval_orders.retrieval_collection_id': 'retrieval_collections.id' })
    .where({
      'retrieval_orders.id': id
    })

  // If there is not record in the database prevent taking any additional actions
  if (!retrievalRecord) {
    return {
      accessToken,
      id,
      orderStatus: 'not_found',
      orderType
    }
  }

  const {
    order_number: orderNumber
  } = retrievalRecord

  console.log(`Requesting order data from Legacy Services at ${getEarthdataConfig(cmrEnv()).echoRestRoot}/orders.json`)

  // Retrieve the order from Legacy Services
  const orderResponse = await request.get({
    uri: `${getEarthdataConfig(cmrEnv()).echoRestRoot}/orders.json`,
    headers: {
      'Echo-Token': accessToken,
      'Client-Id': getClientId(cmrEnv()).background
    },
    qs: { id: orderNumber },
    qsStringifyOptions: {
      indices: false,
      arrayFormat: 'brackets'
    },
    json: true,
    resolveWithFullResponse: true
  })

  console.log('Order Response Body', JSON.stringify(orderResponse.body, null, 4))

  // This endpoint returns and array, but we're only asking for a single record
  const [firstOrder] = orderResponse.body

  const { order } = firstOrder
  const { state } = order

  // Updates the database with current order data
  await dbConnection('retrieval_orders')
    .update({
      order_information: order,
      state
    })
    .where({
      id
    })

  return {
    accessToken,
    id,
    orderStatus: getStateFromOrderStatus(state),
    orderType
  }
}

export default fetchLegacyServicesOrder
