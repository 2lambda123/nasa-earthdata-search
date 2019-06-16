import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ProjectCollectionsContainer } from '../ProjectCollectionsContainer'
import ProjectCollections from '../../../components/ProjectCollections/ProjectCollections'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    collections: {
      allIds: ['collectionId'],
      byId: {
        collectionId: {
          mock: 'data'
        }
      },
      projectIds: ['collectionId']
    },
    collectionsSearch: {
      allIds: ['collectionId'],
      byId: {
        collectionId: {
          mock: 'data'
        }
      },
      isLoading: false,
      isLoaded: true
    },
    onRemoveCollectionFromProject: jest.fn(),
    onToggleCollectionVisibility: jest.fn()
  }

  const enzymeWrapper = shallow(<ProjectCollectionsContainer {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('ProjectCollectionsContainer component', () => {
  test('passes its props and renders a single ProjectCollections component', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find(ProjectCollections).length).toBe(1)
    expect(enzymeWrapper.find(ProjectCollections).props().collections).toEqual({
      allIds: ['collectionId'],
      byId: {
        collectionId: {
          mock: 'data'
        }
      },
      projectIds: ['collectionId']
    })
    expect(enzymeWrapper.find(ProjectCollections).props().collectionsSearch).toEqual({
      allIds: ['collectionId'],
      byId: {
        collectionId: {
          mock: 'data'
        }
      },
      isLoading: false,
      isLoaded: true
    })
    expect(typeof enzymeWrapper.find(ProjectCollections).props().onRemoveCollectionFromProject).toEqual('function')
  })
})
