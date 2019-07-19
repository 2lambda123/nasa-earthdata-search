import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Badge, ProgressBar } from 'react-bootstrap'

import { OrderDropdownItem } from '../OrderDropdownItem'

import { orderStatusPropsEsi } from '../../OrderStatus/__tests__/mocks'

beforeEach(() => {
  jest.clearAllMocks()
})

Enzyme.configure({ adapter: new Adapter() })

function setup() {

  const order = orderStatusPropsEsi.order.collections.esi_orders[0]
    .access_method.order.service_options.orders[0]

  const props = {
    order,
    i: 0,
    totalOrders: 2
  }

  const enzymeWrapper = shallow(<OrderDropdownItem {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('OrderDropdownItem component', () => {
  const { enzymeWrapper } = setup()

  test('is displayed', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  test('displays the links', () => {
    expect(enzymeWrapper.find('.order-dropdown-item__title').text()).toEqual('Order 1/2 Order ID: 5000000333461')
    expect(enzymeWrapper.find('.order-dropdown-item__list-item').length).toEqual(2)
    expect(enzymeWrapper.find('.order-dropdown-item__list-item').at(0).find('.order-dropdown-item__link').text())
      .toEqual('https://n5eil02u.ecs.nsidc.org/esir/5000000333461.html')
    expect(enzymeWrapper.find('.order-dropdown-item__list-item').at(0).find('.order-dropdown-item__link').prop('href'))
      .toEqual('https://n5eil02u.ecs.nsidc.org/esir/5000000333461.html')
    expect(enzymeWrapper.find('.order-dropdown-item__list-item').at(1).find('.order-dropdown-item__link').text())
      .toEqual('https://n5eil02u.ecs.nsidc.org/esir/5000000333461.zip')
    expect(enzymeWrapper.find('.order-dropdown-item__list-item').at(1).find('.order-dropdown-item__link').prop('href'))
      .toEqual('https://n5eil02u.ecs.nsidc.org/esir/5000000333461.zip')
  })
})
