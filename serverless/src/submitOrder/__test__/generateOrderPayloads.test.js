import { generateOrderPayloads } from '../generateOrderPayloads'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('generateOrderPayloads', () => {
  test('returns the correct payload for a single page', async () => {
    const orderPayloads = await generateOrderPayloads(
      {
        id: 19,
        access_method: {
          type: 'ECHO ORDERS',
          id: 'S10000001-EDSC',
          url: 'https://n5eil09e.ecs.edsc.org/egi/request'
        },
        collection_metadata: {},
        granule_count: 25,
        granule_params: {
          bounding_box: '23.607421875,5.381262277997806,27.7965087890625,14.973184553280502'
        }
      }
    )

    expect(orderPayloads).toEqual([{
      bounding_box: '23.607421875,5.381262277997806,27.7965087890625,14.973184553280502',
      page_num: 1,
      page_size: 2000
    }])
  })

  test('returns the correct payload for multiple pages', async () => {
    const orderPayloads = await generateOrderPayloads(
      {
        id: 19,
        access_method: {
          type: 'ECHO ORDERS',
          id: 'S10000001-EDSC',
          url: 'https://n5eil09e.ecs.edsc.org/egi/request'
        },
        collection_metadata: {},
        granule_count: 2500,
        granule_params: {
          bounding_box: '23.607421875,5.381262277997806,27.7965087890625,14.973184553280502'
        }
      }
    )

    expect(orderPayloads).toEqual([{
      bounding_box: '23.607421875,5.381262277997806,27.7965087890625,14.973184553280502',
      page_num: 1,
      page_size: 2000
    }, {
      bounding_box: '23.607421875,5.381262277997806,27.7965087890625,14.973184553280502',
      page_num: 2,
      page_size: 2000
    }])
  })
})
