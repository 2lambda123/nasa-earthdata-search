import { getDbConnection } from '../util/database/getDbConnection'
import { getJwtToken } from '../util/getJwtToken'
import { getVerifiedJwtToken } from '../util/getVerifiedJwtToken'
import { isWarmUp } from '../util/isWarmup'
import { obfuscateId } from '../util/obfuscation/obfuscateId'

// Knex database connection object
let dbConnection = null

/**
 * Handler to retrieve a single color map record from the application database
 */
const getRetrievalCollection = async (event, context) => {
  // Prevent execution if the event source is the warmer
  if (await isWarmUp(event)) return false

  try {
    // https://stackoverflow.com/questions/49347210/why-aws-lambda-keeps-timing-out-when-using-knex-js
    // eslint-disable-next-line no-param-reassign
    context.callbackWaitsForEmptyEventLoop = false

    const {
      id: providedRetrievalCollectionId
    } = event.pathParameters

    const jwtToken = getJwtToken(event)

    const { id: userId } = getVerifiedJwtToken(jwtToken)

    // Retrieve a connection to the database
    dbConnection = await getDbConnection(dbConnection)

    const retrievalCollectionResponse = await dbConnection('retrieval_collections')
      .select(
        'retrievals.id AS retrieval_id',
        'retrievals.jsondata',
        'retrievals.environment',
        'retrieval_collections.id',
        'retrieval_collections.access_method',
        'retrieval_collections.collection_id',
        'retrieval_collections.collection_metadata',
        'retrieval_collections.granule_params',
        'retrieval_collections.granule_count',
        'retrieval_orders.id AS retrieval_order_id',
        'retrieval_orders.type',
        'retrieval_orders.order_number',
        'retrieval_orders.order_information',
        'retrieval_orders.state',
        'users.urs_id'
      )
      .leftJoin('retrieval_orders', { 'retrieval_collections.id': 'retrieval_orders.retrieval_collection_id' })
      .join('retrievals', { 'retrieval_collections.retrieval_id': 'retrievals.id' })
      .join('users', { 'retrievals.user_id': 'users.id' })
      .where({
        'retrieval_collections.id': providedRetrievalCollectionId,
        'users.id': userId
      })

    if (retrievalCollectionResponse !== null && retrievalCollectionResponse.length > 0) {
      // Pull out the retrieval data from the first row (they will all be the same due to the join)
      const [retrievalCollectionObject] = retrievalCollectionResponse

      const {
        id,
        retrieval_id: retrievalId,
        access_method: accessMethod,
        collection_id: collectionId,
        collection_metadata: collectionMetadata,
        granule_params: granuleParams,
        granule_count: granuleCount,
        retrieval_order_id: retrievalOrderId, // Used to check whether or not orders exist based on the left join
        urs_id: ursId
      } = retrievalCollectionObject

      let orders = []

      // We used a left join above because there won't me any matching rows for
      // downloadable order types but using the left join will return null values
      // for those orders, we can check that here by checking any of the values
      if (retrievalOrderId) {
        orders = retrievalCollectionResponse.map(({
          retrieval_order_id: id,
          type,
          order_number: orderNumber,
          order_information: orderInformation,
          state
        }) => ({
          id,
          type,
          order_number: orderNumber,
          order_information: orderInformation,
          state
        }))
      }

      return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          id,
          retrieval_id: obfuscateId(retrievalId),
          access_method: accessMethod,
          collection_id: collectionId,
          collection_metadata: collectionMetadata,
          granule_params: granuleParams,
          granule_count: granuleCount,
          orders,
          urs_id: ursId
        })
      }
    }

    return {
      isBase64Encoded: false,
      statusCode: 404,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ errors: [`Retrieval Collection '${providedRetrievalCollectionId}' not found.`] })
    }
  } catch (e) {
    console.log(e)

    return {
      isBase64Encoded: false,
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ errors: [e] })
    }
  }
}

export default getRetrievalCollection
