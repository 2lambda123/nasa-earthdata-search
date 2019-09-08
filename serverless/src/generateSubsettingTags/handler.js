import 'array-foreach-async'
import AWS from 'aws-sdk'
import request from 'request-promise'
import { stringify } from 'qs'
import { chunkArray } from '../util/chunkArray'
import { getClientId, getEarthdataConfig } from '../../../sharedUtils/config'
import { getRelevantServices } from './getRelevantServices'
import { pageAllCmrResults } from '../util/cmr/pageAllCmrResults'
import { getSystemToken } from '../util/urs/getSystemToken'
import { cmrEnv } from '../../../sharedUtils/cmrEnv'

// AWS SQS adapter
let sqs
let cmrToken

/**
 * Retrieve service option definition records
 * @param {Array} serviceOptionIds Array of service option ids
 */
const getServiceOptionDefinitionIdNamePairs = async (serviceOptionIds) => {
  // TODO: Consider consalidating this and the lambda that retrieves a single record
  const { echoRestRoot } = getEarthdataConfig(cmrEnv())

  cmrToken = await getSystemToken(cmrToken)

  // This is a get request so we need to consider URL length
  const chunkedServiceOptionIds = chunkArray(serviceOptionIds, 50)

  const serviceOptionIdNamePairs = {}

  await chunkedServiceOptionIds.forEachAsync(async (serviceOptionIdChunk) => {
    const serviceOptionDefinitionUrl = `${echoRestRoot}/service_option_definitions.json`

    // Construct a query param string from the chunk of ids
    const serviceOptionQueryParams = stringify({
      id: serviceOptionIdChunk
    }, { indices: false, arrayFormat: 'brackets' })

    try {
      // Request the service option definitions from legacy services
      const serviceOptionDefinitionResponse = await request.get({
        uri: `${serviceOptionDefinitionUrl}?${serviceOptionQueryParams}`,
        headers: {
          'Client-Id': getClientId().background,
          'Echo-Client': cmrToken
        },
        json: true,
        resolveWithFullResponse: true
      })

      // Iterate through the option definitions returned
      const serviceOptionDefinitionResponseBody = serviceOptionDefinitionResponse.body

      serviceOptionDefinitionResponseBody.forEach((serviceOptionObj) => {
        const { service_option_definition: serviceOptionDefinition } = serviceOptionObj
        const { id, name } = serviceOptionDefinition

        serviceOptionIdNamePairs[id] = name
      })
    } catch (e) {
      console.log(e)
    }
  })

  return serviceOptionIdNamePairs
}

/**
 * Handler to process subsetting information from UMM S associations on collections
 */
const generateSubsettingTags = async (event, context) => {
  // https://stackoverflow.com/questions/49347210/why-aws-lambda-keeps-timing-out-when-using-knex-js
  // eslint-disable-next-line
  context.callbackWaitsForEmptyEventLoop = false

  sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

  cmrToken = await getSystemToken(cmrToken)

  // The headers we'll send back regardless of our response
  const responseHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  }

  const { echoRestRoot } = getEarthdataConfig(cmrEnv())

  // Retrieve all known service option associations to use later when constructing
  // tag data payloads for ESI collections
  let serviceOptionAssignments = []

  // Service option assignments don't store the name of the service option so we have
  // to retrieve them separately -- we will use this to store a simple key value pair
  // mapping id => name
  let serviceOptionIdNamePairs = {}

  const serviceOptionAssignmentUrl = `${echoRestRoot}/service_option_assignments.json`
  try {
    const serviceOptionResponse = await request.get({
      uri: serviceOptionAssignmentUrl,
      headers: {
        'Client-Id': getClientId().background,
        'Echo-Client': cmrToken

      },
      json: true,
      resolveWithFullResponse: true
    })

    serviceOptionAssignments = serviceOptionResponse.body

    const serviceOptionIds = serviceOptionAssignments.map((optionAssociation) => {
      const { service_option_assignment: optionAssignment } = optionAssociation
      const { service_option_definition_id: optionId } = optionAssignment

      return optionId
    })

    serviceOptionIdNamePairs = await getServiceOptionDefinitionIdNamePairs(serviceOptionIds)
  } catch (e) {
    console.log(e)
  }

  // Retrieve only those service objects that match the types edsc subsets
  const serviceObjects = await getRelevantServices()

  const allCollectionsWithServices = []
  const chunkedServices = chunkArray(Object.keys(serviceObjects), 100)

  await chunkedServices.forEachAsync(async (chunk) => {
    const allCmrCollections = await pageAllCmrResults('search/collections.json', {
      service_concept_id: chunk,
      has_granules: true
    })

    allCollectionsWithServices.push(...allCmrCollections)
  })

  await allCollectionsWithServices.forEachAsync(async (collection) => {
    const { associations = {} } = collection
    const { services = [] } = associations

    await services.forEachAsync(async (collectionService) => {
      if (Object.keys(serviceObjects).includes(collectionService)) {
        serviceObjects[collectionService].collections.push(collection)
      }
    })
  })

  // Keep track of collections per type so that we can remove old tags
  const collectionsToTag = {
    esi: [],
    opendap: [],
    echo_orders: []
  }

  await Object.keys(serviceObjects).forEachAsync(async (serviceConceptId) => {
    const serviceForTagging = serviceObjects[serviceConceptId]
    const { collections, tagData } = serviceForTagging
    const { type } = tagData

    if (collections.length) {
      try {
        // Convert the CMR Service Type to a lowercase string with no spaces
        const tagPostFix = type.toLowerCase().replace(/ /g, '_')
        const collectionTagData = await Promise.all(collections.map(async (collection) => {
          const { id: collectionId } = collection

          // We're adding to the provided object so we use assign to prevent eslint issues
          const data = Object.assign({
            updated_at: new Date().toISOString()
          }, tagData)

          // Retrieve the service option definition (Echo Form Association) for ESI collections
          if (tagPostFix === 'esi') {
            const foundOptionAssignments = serviceOptionAssignments.filter((optionAssociation) => {
              const { service_option_assignment: optionAssignment } = optionAssociation
              const { catalog_item_id: conceptId } = optionAssignment

              return conceptId === collectionId
            })

            if (foundOptionAssignments.length > 0) {
              data.service_option_definitions = foundOptionAssignments.map((foundServiceOption) => {
                const { service_option_assignment: serviceOptionAssignment } = foundServiceOption
                const { service_option_definition_id: optionDefinitionId } = serviceOptionAssignment

                return {
                  id: optionDefinitionId,
                  name: serviceOptionIdNamePairs[optionDefinitionId]
                }
              })
            }
          } else if (tagPostFix === 'echo_orders') {
            // Because we've already retrieved collection and we know it support echo orders we'll send
            // this data off to another lambda to fetch to add option definitions to echo_orders subsetting tags
            try {
              await sqs.sendMessage({
                QueueUrl: process.env.optionDefinitionQueueUrl,
                MessageBody: JSON.stringify({
                  collectionId,
                  tagData: data
                })
              }).promise()
            } catch (e) {
              console.log(e)
            }
          }

          return { 'concept-id': collectionId, data }
        }))

        // Only tag opendap and esi collections, echo_orders will be tagged using the option definition queue
        if (['opendap', 'esi', 'echo_orders'].includes(tagPostFix)) {
          const collectionCriteria = collections.map(collection => ({ concept_id: collection.id }))

          // Construct an array that we'll negate and use for removing the tag from collections that don't appear here
          collectionsToTag[tagPostFix].push(...collectionCriteria)

          if (tagPostFix !== 'echo_orders') {
            await sqs.sendMessage({
              QueueUrl: process.env.tagQueueUrl,
              MessageBody: JSON.stringify({
                tagName: `edsc.extra.serverless.subset_service.${tagPostFix}`,
                action: 'ADD',
                append: false,
                requireGranules: false,
                tagData: collectionTagData
              })
            }).promise()
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
  })

  // Remove tags from collections that don't meet the criteria defined above
  await Object.keys(collectionsToTag).forEachAsync(async (tagPostFix) => {
    const removeTagCriteria = {
      condition: {
        and: [
          {
            tag: { tag_key: `edsc.extra.serverless.subset_service.${tagPostFix}` }
          }
        ]
      }
    }

    const taggedCollections = collectionsToTag[tagPostFix]

    if (taggedCollections.length) {
      removeTagCriteria.condition.and.push({
        not: { or: taggedCollections }
      })

      try {
        await sqs.sendMessage({
          QueueUrl: process.env.tagQueueUrl,
          MessageBody: JSON.stringify({
            tagName: `edsc.extra.serverless.subset_service.${tagPostFix}`,
            action: 'REMOVE',
            searchCriteria: removeTagCriteria
          })
        }).promise()
      } catch (e) {
        console.log(e)
      }
    }
  })

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: responseHeaders,
    body: JSON.stringify({})
  }
}

export default generateSubsettingTags
