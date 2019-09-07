import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { DownloadHistoryContainer } from '../DownloadHistoryContainer'
import { DownloadHistory } from '../../../components/DownloadHistory/DownloadHistory'

Enzyme.configure({ adapter: new Adapter() })

function setup(props) {
  const enzymeWrapper = shallow(<DownloadHistoryContainer {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('DownloadHistoryContainer component', () => {
  describe('when passed the correct props', () => {
    test('renders a table when a retrieval exists with one collection that has no title', () => {
      const { enzymeWrapper } = setup({
        authToken: 'testToken',
        retrievalHistory: [{
          id: '8069076',
          jsondata: {},
          created_at: '2019-08-25T11:58:14.390Z',
          collections: [{}]
        }],
        onFetchRetrievalHistory: jest.fn(),
        onDeleteRetrieval: jest.fn()
      })

      expect(enzymeWrapper.find(DownloadHistory).length).toBe(1)
    })
  })
})
