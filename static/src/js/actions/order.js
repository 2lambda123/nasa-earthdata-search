import { push } from 'connected-react-router'
import prepareOrderParams from '../util/orders'
import OrderRequest from '../util/request/orderRequest'

import { UPDATE_ORDER } from '../constants/actionTypes'

export const updateOrder = orderData => ({
  type: UPDATE_ORDER,
  payload: orderData
})

export const submitOrder = () => (dispatch, getState) => {
  const orderParams = prepareOrderParams(getState())
  const { authToken } = orderParams

  const requestObject = new OrderRequest(authToken)

  const response = requestObject.submit(orderParams)
    .then((response) => {
      const { id: retrievalId } = response.data
      dispatch(push(`/data/retrieve/${retrievalId}`))
    })
    .catch((e) => {
      console.log('Promise Rejected', e)
    })

  return response
}

/**
 * Fetch order data for an order
 */
export const fetchOrder = (id, authToken) => (dispatch) => {
  const requestObject = new OrderRequest(authToken)

  const response = requestObject.collections(id)
    .then((response) => {
      const { data } = response
      const order = []
      order.id = data.id
      order.environment = data.environment
      order.jsondata = data.jsondata
      order.collections = {
        download: [],
        echoOrder: [],
        order: []
      }
      order.links = []
      data.collections.forEach((collection) => {
        const {
          access_method: accessMethod,
          collection_metadata: collectionMetadata
        } = collection
        const { type } = accessMethod
        const {
          dataset_id: datasetId,
          links
        } = collectionMetadata

        order.collections[type] = [
          ...order.collections[type],
          collection
        ]

        const collectionLinks = links.filter((link = {}) => link.rel.indexOf('metadata#') > -1)

        order.links.push({
          datasetId,
          links: collectionLinks
        })
      })
      dispatch(updateOrder(order))
    })
    .catch((e) => {
      console.log('Promise Rejected', e)
    })

  return response
}

export default submitOrder
