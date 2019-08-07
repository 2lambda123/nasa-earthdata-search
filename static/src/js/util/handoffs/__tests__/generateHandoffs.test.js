import { generateHandoffs } from '../generateHandoffs'

describe('handoffs#giovanni', () => {
  test('returns an empty array when the collection is not tagged with a handoff tag', () => {
    const collectionMetadata = {
      short_name: 'earthdata_search',
      tags: {
        'edsc.extra.serverless.something_unrelated': {}
      }
    }

    const response = generateHandoffs(collectionMetadata)

    expect(response).toEqual([])
  })

  test('returns a giovanni handoff object with the default root and collection shortname when no subsetting is provided', () => {
    const collectionMetadata = {
      short_name: 'earthdata_search',
      tags: {
        'edsc.extra.serverless.handoff.giovanni': {}
      }
    }

    const response = generateHandoffs(collectionMetadata)

    expect(response).toEqual([
      {
        title: 'Giovanni',
        href: 'https://giovanni.gsfc.nasa.gov/giovanni/#service=TmAvMp&dataKeyword=earthdata_search'
      }
    ])
  })
})
