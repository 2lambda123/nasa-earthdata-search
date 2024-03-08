/**
 * Return the GraphQl query for verifying the request is what we expect inside of cy.intercept
 * @param {String} conceptId conceptId to retrieve
 */
export const graphQlGetCollections = (conceptId) => `{"query":"\\n    query GetProjectCollections ($params: CollectionsInput, $subcriptionParams: SubscriptionsInput, $variableParams: VariablesInput) {\\n      collections (\\n        params: $params\\n      ) {\\n        items {\\n          abstract\\n          archiveAndDistributionInformation\\n          associatedDois\\n          boxes\\n          cloudHosted\\n          conceptId\\n          coordinateSystem\\n          dataCenter\\n          dataCenters\\n          dataQualitySummaries {\\n            count\\n            items {\\n              id\\n              summary\\n            }\\n          }\\n          directDistributionInformation\\n          doi\\n          duplicateCollections {\\n            count\\n            items {\\n              id\\n            }\\n          }\\n          hasGranules\\n          lines\\n          points\\n          polygons\\n          relatedCollections (\\n            limit: 3\\n          ) {\\n            count\\n            items {\\n              id\\n              title\\n            }\\n          }\\n          relatedUrls\\n          scienceKeywords\\n          shortName\\n          spatialExtent\\n          tags\\n          temporalExtents\\n          tilingIdentificationSystems\\n          title\\n          versionId\\n          services {\\n            count\\n            items {\\n              conceptId\\n              longName\\n              name\\n              type\\n              url\\n              serviceOptions\\n              supportedOutputProjections\\n              supportedReformattings\\n              maxItemsPerOrder\\n              orderOptions {\\n                count\\n                items {\\n                  conceptId\\n                  name\\n                  form\\n                }\\n              }\\n              variables (\\n          params: $variableParams\\n        ) {\\n                count\\n                items {\\n                  conceptId\\n                  definition\\n                  longName\\n                  name\\n                  nativeId\\n                  scienceKeywords\\n                }\\n              }\\n            }\\n          }\\n          granules {\\n            count\\n            items {\\n              browseFlag\\n              conceptId\\n              onlineAccessFlag\\n              links\\n            }\\n          }\\n          subscriptions (\\n            params: $subcriptionParams\\n          ) {\\n            count\\n            items {\\n              collectionConceptId\\n              conceptId\\n              name\\n              query\\n            }\\n          }\\n          tools {\\n            count\\n            items {\\n              longName\\n              name\\n              potentialAction\\n            }\\n          }\\n          variables {\\n            count\\n            items {\\n              conceptId\\n              definition\\n              instanceInformation\\n              longName\\n              name\\n              nativeId\\n              scienceKeywords\\n            }\\n          }\\n        }\\n      }\\n    }","variables":{"params":{"conceptId":["${conceptId}"],"includeTags":"edsc.*,opensearch.granule.osdd","includeHasGranules":true,"pageSize":1},"subcriptionParams":{},"variableParams":{"limit":2000}}}`
