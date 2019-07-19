import React from 'react'
import PropTypes from 'prop-types'

import './OrderDropdownItem.scss'

export const OrderDropdownItem = ({
  i,
  order,
  totalOrders
}) => {
  const {
    order_id: orderId,
    download_urls: orderDownloadUrls
  } = order

  return (
    <li
      key={orderId}
      i={i}
      className="order-dropdown-item"
    >
      <h4 className="order-dropdown-item__title">
        {`Order ${i + 1}/${totalOrders} `}
        <span>{`Order ID: ${orderId}`}</span>
      </h4>
      <ul className="order-dropdown-item__list">
        {
          orderDownloadUrls.map(href => (
            <li
              key={href}
              className="order-dropdown-item__list-item"
            >
              <a className="order-dropdown-item__link" href={href}>{href}</a>
            </li>
          ))
        }
      </ul>
    </li>
  )
}

OrderDropdownItem.propTypes = {
  i: PropTypes.number.isRequired,
  order: PropTypes.shape({}).isRequired,
  totalOrders: PropTypes.number.isRequired
}

export default OrderDropdownItem
