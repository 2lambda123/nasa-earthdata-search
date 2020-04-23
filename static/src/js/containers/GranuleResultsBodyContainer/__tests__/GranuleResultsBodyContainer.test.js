import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { GranuleResultsBodyContainer } from '../GranuleResultsBodyContainer'
import GranuleResultsBody from '../../../components/GranuleResults/GranuleResultsBody'

Enzyme.configure({ adapter: new Adapter() })

function setup(overrideProps) {
  const props = {
    collections: {
      allIds: ['focusedCollection'],
      byId: {
        focusedCollection: {
          excludedGranuleIds: ['id1'],
          granules: { value: 'granules' },
          metadata: {}
        }
      }
    },
    focusedCollection: 'focusedCollection',
    focusedGranule: '',
    granuleQuery: { pageNum: 1 },
    isActive: true,
    location: { search: 'value' },
    onChangeGranulePageNum: jest.fn(),
    onExcludeGranule: jest.fn(),
    onFocusedGranuleChange: jest.fn(),
    onMetricsDataAccess: jest.fn(),
    panelView: 'list',
    ...overrideProps
  }

  const enzymeWrapper = shallow(<GranuleResultsBodyContainer {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('GranuleResultsBodyContainer component', () => {
  test('passes its props and renders a single GranuleResultsBody component', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find(GranuleResultsBody).length).toBe(1)
    expect(enzymeWrapper.find(GranuleResultsBody).props().collectionId).toEqual('focusedCollection')
    expect(enzymeWrapper.find(GranuleResultsBody).props().excludedGranuleIds).toEqual(['id1'])
    expect(enzymeWrapper.find(GranuleResultsBody).props().isCwic).toEqual(false)
    expect(enzymeWrapper.find(GranuleResultsBody).props().focusedGranule).toEqual('')
  })

  test('loadNextPage calls onChangeGranulePageNum', () => {
    const { enzymeWrapper, props } = setup()

    const granuleResultsBody = enzymeWrapper.find(GranuleResultsBody)

    granuleResultsBody.prop('loadNextPage')()

    expect(props.onChangeGranulePageNum.mock.calls.length).toBe(1)
    expect(props.onChangeGranulePageNum.mock.calls[0]).toEqual([{
      collectionId: 'focusedCollection',
      pageNum: 2
    }])
  })
})
