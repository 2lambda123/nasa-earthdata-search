import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CollectionResultsBodyContainer } from '../CollectionResultsBodyContainer'
import CollectionResultsBody from '../../../components/CollectionResults/CollectionResultsBody'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    collections: { value: 'collections' },
    query: { pageNum: 1 },
    location: { value: 'location' },
    onChangeCollectionPageNum: jest.fn(),
    onViewCollectionGranules: jest.fn(),
    onViewCollectionDetails: jest.fn()
  }

  const enzymeWrapper = shallow(<CollectionResultsBodyContainer {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('CollectionResultsBodyContainer component', () => {
  test('passes its props and renders a single CollectionResultsBody component', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find(CollectionResultsBody).length).toBe(1)
    expect(enzymeWrapper.find(CollectionResultsBody).props().collections).toEqual({ value: 'collections' })
    expect(enzymeWrapper.find(CollectionResultsBody).props().location).toEqual({ value: 'location' })
    expect(typeof enzymeWrapper.find(CollectionResultsBody).props().onViewCollectionGranules).toEqual('function')
    expect(typeof enzymeWrapper.find(CollectionResultsBody).props().onViewCollectionDetails).toEqual('function')
  })

  test('waypointEnter calls onChangeCollectionPageNum', () => {
    const { enzymeWrapper, props } = setup()

    const collectionResultsBody = enzymeWrapper.find(CollectionResultsBody)

    collectionResultsBody.prop('waypointEnter')({ event: { type: 'scroll' } })

    expect(props.onChangeCollectionPageNum.mock.calls.length).toBe(1)
    expect(props.onChangeCollectionPageNum.mock.calls[0]).toEqual([2])
  })

  test('waypointEnter does not call onChangeCollectionPageNum if there is no scroll event', () => {
    const { enzymeWrapper, props } = setup()

    const collectionResultsBody = enzymeWrapper.find(CollectionResultsBody)

    collectionResultsBody.prop('waypointEnter')({ event: null })

    expect(props.onChangeCollectionPageNum.mock.calls.length).toBe(0)
  })
})
