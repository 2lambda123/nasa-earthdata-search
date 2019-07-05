import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ProjectPanelsContainer } from '../ProjectPanelsContainer'
import ProjectPanels from '../../../components/ProjectPanels/ProjectPanels'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    collections: {
      allIds: ['collectionId'],
      byId: {
        collectionId: {
          mock: 'data'
        }
      }
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
    onSelectAccessMethod: jest.fn(),
    onSetActivePanel: jest.fn(),
    onTogglePanels: jest.fn(),
    onUpdateAccessMethod: jest.fn(),
    project: {
      collectionIds: ['collectionId']
    },
    projectPanels: {
      activePanel: '0.0.0',
      isOpen: false
    }
  }

  const enzymeWrapper = shallow(<ProjectPanelsContainer {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('ProjectPanelsContainer component', () => {
  test('passes its props and renders a single ProjectPanels component', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find(ProjectPanels).length).toBe(1)
    expect(enzymeWrapper.find(ProjectPanels).props().collections).toEqual({
      allIds: ['collectionId'],
      byId: {
        collectionId: {
          mock: 'data'
        }
      }
    })
    expect(enzymeWrapper.find(ProjectPanels).props().project).toEqual({
      collectionIds: ['collectionId']
    })
    expect(enzymeWrapper.find(ProjectPanels).props().collectionsSearch).toEqual({
      allIds: ['collectionId'],
      byId: {
        collectionId: {
          mock: 'data'
        }
      },
      isLoading: false,
      isLoaded: true
    })
    expect(typeof enzymeWrapper.find(ProjectPanels).props().onSetActivePanel).toEqual('function')
    expect(typeof enzymeWrapper.find(ProjectPanels).props().onTogglePanels).toEqual('function')
    expect(enzymeWrapper.find(ProjectPanels).props().projectPanels).toEqual({
      activePanel: '0.0.0',
      isOpen: false
    })
  })
})
