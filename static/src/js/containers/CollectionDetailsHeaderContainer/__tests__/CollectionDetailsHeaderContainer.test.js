import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CollectionDetailsHeaderContainer } from '../CollectionDetailsHeaderContainer'
import CollectionDetailsHeader from '../../../components/CollectionDetails/CollectionDetailsHeader'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    collections: {
      allIds: ['focusedCollection'],
      byId: {
        focusedCollection: {
          excludedGranuleIds: [],
          metadata: {
            some: 'metadata'
          }
        }
      }
    },
    focusedCollection: 'focusedCollection'
  }

  const enzymeWrapper = shallow(<CollectionDetailsHeaderContainer {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('CollectionDetailsHeaderContainer component', () => {
  test('passes its props and renders a single CollectionDetailsHeader component', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find(CollectionDetailsHeader).length).toBe(1)
    expect(enzymeWrapper.find(CollectionDetailsHeader).props('focusedCollectionMetadata')).toEqual({
      focusedCollectionMetadata: {
        focusedCollection: {
          excludedGranuleIds: [],
          metadata: {
            some: 'metadata'
          }
        }
      }
    })
  })
})
