import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GranuleResultsBody from '../GranuleResultsBody'
import GranuleResultsList from '../GranuleResultsList'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    collectionId: 'collectionId',
    excludedGranuleIds: [],
    focusedGranule: '',
    granules: {
      one: 'test',
      two: 'test'
    },
    isCwic: false,
    pageNum: 1,
    location: { search: 'value' },
    waypointEnter: jest.fn(),
    onExcludeGranule: jest.fn(),
    onFocusedGranuleChange: jest.fn()
  }

  const enzymeWrapper = shallow(<GranuleResultsBody {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('GranuleResultsBody component', () => {
  test('renders itself correctly', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.type()).toBe('div')
    expect(enzymeWrapper.prop('className')).toBe('granule-results-body')
  })

  test('passes the granules to a single GranuleResultsList component', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find(GranuleResultsList).length).toEqual(1)
    expect(enzymeWrapper.find(GranuleResultsList).props().granules).toEqual({
      one: 'test',
      two: 'test'
    })
    expect(enzymeWrapper.find(GranuleResultsList).props().pageNum).toEqual(1)
    expect(typeof enzymeWrapper.find(GranuleResultsList).props().waypointEnter).toEqual('function')
  })
})
