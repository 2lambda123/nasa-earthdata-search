import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { VariableDetailsPanel } from '../VariableDetailsPanel'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    panelHeader: '',
    variable: {
      umm: {
        Definition: 'Variable Definition',
        Name: 'Variable Name',
        LongName: 'Variable Long Name'
      }
    }
  }

  const enzymeWrapper = shallow(<VariableDetailsPanel {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('VariableDetailsPanel', () => {
  test('displays the variable details', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('.variable-details-panel__heading').text()).toEqual('Variable Name')
    expect(enzymeWrapper.find('.variable-details-panel__longname').text()).toEqual('Variable Long Name')
    expect(enzymeWrapper.find('.variable-details-panel__description').text()).toEqual('Variable Definition')
  })
})
