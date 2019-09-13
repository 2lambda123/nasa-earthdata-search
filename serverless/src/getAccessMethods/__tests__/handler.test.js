import knex from 'knex'
import mockKnex from 'mock-knex'

import getAccessMethods from '../handler'
import * as getJwtToken from '../../util/getJwtToken'
import * as getOptionDefinitions from '../getOptionDefinitions'
import * as getServiceOptionDefinitions from '../getServiceOptionDefinitions'
import * as getVariables from '../getVariables'
import * as getVerifiedJwtToken from '../../util/getVerifiedJwtToken'
import * as getDbConnection from '../../util/database/getDbConnection'
import * as getOutputFormats from '../getOutputFormats'

let dbConnectionToMock
let dbTracker

beforeEach(() => {
  jest.clearAllMocks()
  jest.spyOn(getJwtToken, 'getJwtToken').mockImplementation(() => 'mockJwt')
  jest.spyOn(getVerifiedJwtToken, 'getVerifiedJwtToken').mockImplementation(() => ({ id: 1 }))

  jest.spyOn(getDbConnection, 'getDbConnection').mockImplementationOnce(() => {
    dbConnectionToMock = knex({
      client: 'pg',
      debug: false
    })

    // Mock the db connection
    mockKnex.mock(dbConnectionToMock)

    return dbConnectionToMock
  })

  dbTracker = mockKnex.getTracker()
  dbTracker.install()
})

afterEach(() => {
  dbTracker.uninstall()
})

describe('getAccessMethods', () => {
  test('populates a download method', async () => {
    dbTracker.on('query', (query) => {
      query.response([])
    })

    const event = {
      body: JSON.stringify({
        params: {
          collection_id: 'collectionId',
          tags: {
            'edsc.extra.serverless.collection_capabilities': {
              data: {
                granule_online_access_flag: true
              }
            }
          }
        }
      })
    }

    const result = await getAccessMethods(event)

    expect(result).toEqual({
      body: JSON.stringify({
        accessMethods: {
          download: {
            isValid: true,
            type: 'download'
          }
        },
        selectedAccessMethod: 'download'
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      isBase64Encoded: false,
      statusCode: 200
    })
  })

  test('populates a echoOrder method', async () => {
    dbTracker.on('query', (query) => {
      query.response([])
    })

    jest.spyOn(getOptionDefinitions, 'getOptionDefinitions').mockImplementation(() => [
      {
        echoOrder0: {
          form: 'mock echo form',
          option_definition: {
            id: 'option_def_guid',
            name: 'Option Definition'
          },
          option_definitions: undefined
        }
      }
    ])

    const event = {
      body: JSON.stringify({
        params: {
          collection_id: 'collectionId',
          tags: {
            'edsc.extra.serverless.subset_service.echo_orders': {
              data: {
                option_definitions: [{
                  id: 'option_def_guid',
                  name: 'Option Definition'
                }],
                type: 'ECHO ORDERS'
              }
            }
          }
        }
      })
    }

    const result = await getAccessMethods(event)

    expect(result).toEqual({
      body: JSON.stringify({
        accessMethods: {
          echoOrder0: {
            type: 'ECHO ORDERS',
            form: 'mock echo form',
            option_definition: {
              id: 'option_def_guid',
              name: 'Option Definition'
            },
            option_definitions: undefined
          }
        },
        selectedAccessMethod: 'echoOrder0'
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      isBase64Encoded: false,
      statusCode: 200
    })
  })

  test('populates a esi method', async () => {
    dbTracker.on('query', (query) => {
      query.response([])
    })

    jest.spyOn(getServiceOptionDefinitions, 'getServiceOptionDefinitions').mockImplementation(() => [
      {
        esi0: {
          form: 'mock echo form',
          service_option_definition: {
            id: 'service_option_def_guid',
            name: 'Service Option Definition'
          },
          service_option_definitions: undefined
        }
      }
    ])

    const event = {
      body: JSON.stringify({
        params: {
          collection_id: 'collectionId',
          tags: {
            'edsc.extra.serverless.subset_service.esi': {
              data: {
                service_option_definitions: [{
                  id: 'service_option_def_guid',
                  name: 'Option Option'
                }],
                type: 'ESI'
              }
            }
          }
        }
      })
    }

    const result = await getAccessMethods(event)

    expect(result).toEqual({
      body: JSON.stringify({
        accessMethods: {
          esi0: {
            type: 'ESI',
            form: 'mock echo form',
            service_option_definition: {
              id: 'service_option_def_guid',
              name: 'Service Option Definition'
            },
            service_option_definitions: undefined
          }
        },
        selectedAccessMethod: 'esi0'
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      isBase64Encoded: false,
      statusCode: 200
    })
  })

  test('populates a opendap method', async () => {
    dbTracker.on('query', (query) => {
      query.response([])
    })

    const keywordMappings = {
      Keyword1: ['V123456-EDSC']
    }

    const variables = {
      'V123456-EDSC': {
        meta: {
          mock: 'data'
        },
        umm: {
          'concept-id': 'V123456-EDSC'
        },
        associations: {}
      }
    }

    const supportedOutputFormats = [
      'HDF4',
      'NETCDF-3',
      'NETCDF-4',
      'BINARY',
      'ASCII'
    ]

    jest.spyOn(getVariables, 'getVariables').mockImplementation(() => ({ keywordMappings, variables }))
    jest.spyOn(getOutputFormats, 'getOutputFormats').mockImplementation(() => ({ supportedOutputFormats }))

    const event = {
      body: JSON.stringify({
        params: {
          associations: [],
          collection_id: 'collectionId',
          tags: {
            'edsc.extra.serverless.subset_service.opendap': {
              data: {
                type: 'OPeNDAP'
              }
            }
          }
        }
      })
    }

    const result = await getAccessMethods(event)

    expect(result).toEqual({
      body: JSON.stringify({
        accessMethods: {
          opendap: {
            type: 'OPeNDAP',
            isValid: true,
            keywordMappings,
            variables,
            supportedOutputFormats
          }
        },
        selectedAccessMethod: 'opendap'
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      isBase64Encoded: false,
      statusCode: 200
    })
  })

  describe('saved access configurations', () => {
    test('does not populate selectedAccessMethod if no saved configuration exists', async () => {
      dbTracker.on('query', (query) => {
        query.response([])
      })

      jest.spyOn(getOptionDefinitions, 'getOptionDefinitions').mockImplementation(() => [
        {
          echoOrder0: {
            form: 'mock echo form',
            option_definition: {
              id: 'option_def_guid',
              name: 'Option Definition'
            },
            option_definitions: undefined
          }
        }
      ])

      const event = {
        body: JSON.stringify({
          params: {
            collection_id: 'collectionId',
            tags: {
              'edsc.extra.serverless.collection_capabilities': {
                data: {
                  granule_online_access_flag: true
                }
              },
              'edsc.extra.serverless.subset_service.echo_orders': {
                data: {
                  option_definitions: [{
                    id: 'option_def_guid',
                    name: 'Option Definition'
                  }],
                  type: 'ECHO ORDERS'
                }
              }
            }
          }
        })
      }

      const result = await getAccessMethods(event)

      expect(result).toEqual({
        body: JSON.stringify({
          accessMethods: {
            download: {
              isValid: true,
              type: 'download'
            },
            echoOrder0: {
              type: 'ECHO ORDERS',
              form: 'mock echo form',
              option_definition: {
                id: 'option_def_guid',
                name: 'Option Definition'
              },
              option_definitions: undefined
            }
          }
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        isBase64Encoded: false,
        statusCode: 200
      })
    })

    test('populates the default access configuration', async () => {
      dbTracker.on('query', (query, step) => {
        if (step === 1) {
          query.response({
            access_method: {
              type: 'ECHO ORDERS',
              form: 'mock echo form',
              option_definition: {
                id: 'option_def_guid',
                name: 'Option Definition'
              },
              model: 'mock model',
              rawModel: 'mock raw model',
              form_digest: '948c584e60f9791b4d7b0e84ff538cd58ac8c0e4'
            }
          })
        } else {
          query.response([])
        }
      })

      jest.spyOn(getOptionDefinitions, 'getOptionDefinitions').mockImplementation(() => [
        {
          echoOrder0: {
            form: 'mock echo form',
            option_definition: {
              id: 'option_def_guid',
              name: 'Option Definition'
            },
            option_definitions: undefined
          }
        }
      ])

      const event = {
        body: JSON.stringify({
          params: {
            collection_id: 'collectionId',
            tags: {
              'edsc.extra.serverless.collection_capabilities': {
                data: {
                  granule_online_access_flag: true
                }
              },
              'edsc.extra.serverless.subset_service.echo_orders': {
                data: {
                  option_definitions: [{
                    id: 'option_def_guid',
                    name: 'Option Definition'
                  }],
                  type: 'ECHO ORDERS'
                }
              }
            }
          }
        })
      }

      const result = await getAccessMethods(event)

      expect(result).toEqual({
        body: JSON.stringify({
          accessMethods: {
            download: {
              isValid: true,
              type: 'download'
            },
            echoOrder0: {
              type: 'ECHO ORDERS',
              form: 'mock echo form',
              option_definition: {
                id: 'option_def_guid',
                name: 'Option Definition'
              },
              option_definitions: undefined,
              model: 'mock model',
              rawModel: 'mock raw model',
              form_digest: '948c584e60f9791b4d7b0e84ff538cd58ac8c0e4'
            }
          },
          selectedAccessMethod: 'echoOrder0'
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        isBase64Encoded: false,
        statusCode: 200
      })
    })
  })
})
