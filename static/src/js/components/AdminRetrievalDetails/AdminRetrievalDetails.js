import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  Table,
  Row,
  Col,
  Alert
} from 'react-bootstrap'

import { commafy } from '../../util/commafy'

import Button from '../Button/Button'

import './AdminRetrievalDetails.scss'

export const AdminRetrievalDetails = ({
  retrieval,
  onRequeueOrder
}) => {
  const {
    collections = [],
    jsondata = {},
    obfuscated_id: obfuscatedId,
    username
  } = retrieval

  const {
    portal_id: portalId,
    source
  } = jsondata

  let portalPath = ''
  if (portalId) {
    portalPath = `/portal/${portalId}`
  }

  const sourcePath = `${portalPath}/search${source}`

  return (
    <div className="admin-retrieval-details">
      <Row>
        <Col sm="auto">
          <Row className="admin-retrieval-details__metadata-display mb-2">
            <Col className="admin-retrieval-details__metadata-display-item">
              <span className="admin-retrieval-details__metadata-display-heading">Owner</span>
              <span className="admin-retrieval-details__metadata-display-content">{username}</span>
            </Col>
            <Col className="admin-retrieval-details__metadata-display-item">
              <span className="admin-retrieval-details__metadata-display-heading">Obfuscated ID</span>
              <span className="admin-retrieval-details__metadata-display-content">{obfuscatedId}</span>
            </Col>
          </Row>
          <Row className="admin-retrieval-details__metadata-display mb-2">
            <Col className="admin-retrieval-details__metadata-display-item">
              <span className="admin-retrieval-details__metadata-display-heading">Source Path</span>
              <a className="admin-retrieval-details__metadata-display-content" href={sourcePath} target="_blank" rel="noopener noreferrer">
                {sourcePath}
              </a>
            </Col>
          </Row>
        </Col>
        <Col sm="auto">
          {
            collections.length > 0 && (
              <section className="admin-retrieval-details__collections">
                {
                  collections.map((collection) => {
                    const {
                      id: collectionId,
                      collection_id: collectionConceptId,
                      data_center: collectionDataCenter,
                      granule_count: collectionGranuleCount,
                      orders
                    } = collection

                    return (
                      <article className="admin-retrieval-details__collection" key={collectionId}>
                        <header className="admin-retrieval-details__collection-header">
                          <span className="admin-retrieval-details__metadata-display-heading">Concept ID</span>
                          <h3 className="admin-retrieval-details__collection-heading">{collectionConceptId}</h3>
                          <div className="admin-retrieval-details__collection-heading-details">
                            <div className="admin-retrieval-details__metadata-display">
                              <p className="admin-retrieval-details__metadata-display-item">
                                <span className="admin-retrieval-details__metadata-display-heading">Retrieval Collection ID</span>
                                <span className="admin-retrieval-details__metadata-display-content">{collectionId}</span>
                              </p>
                              <p className="admin-retrieval-details__metadata-display-item">
                                <span className="admin-retrieval-details__metadata-display-heading">Data Provider</span>
                                <span className="admin-retrieval-details__metadata-display-content">{collectionDataCenter}</span>
                              </p>
                              <p className="admin-retrieval-details__metadata-display-item">
                                <span className="admin-retrieval-details__metadata-display-heading">Order Count</span>
                                <span className="admin-retrieval-details__metadata-display-content">{orders.length}</span>
                              </p>
                              <p className="admin-retrieval-details__metadata-display-item">
                                <span className="admin-retrieval-details__metadata-display-heading">Granule Count</span>
                                <span className="admin-retrieval-details__metadata-display-content">{commafy(collectionGranuleCount)}</span>
                              </p>
                            </div>
                          </div>
                        </header>

                        <Alert variant="warning">
                          {/* eslint-disable-next-line max-len */}
                          Clicking Requeue could generate duplicate orders, sending duplicated data to the user. Use with Caution
                        </Alert>

                        {
                          orders.length > 0 && (
                            <Table className="admin-retrieval-details__orders-table" striped variant="light">
                              <thead>
                                <tr>
                                  <th width="10%">Actions</th>
                                  <th width="7%">ID</th>
                                  <th width="20%">Order Number</th>
                                  <th width="20%">Type</th>
                                  <th width="10%">State</th>
                                  <th width="33%">Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  orders.map((order) => {
                                    const {
                                      id: orderId,
                                      order_information: orderInformation,
                                      order_number: orderNumber,
                                      state,
                                      type
                                    } = order

                                    return (
                                      <tr className="admin-retrieval-details__order-row" key={`${collectionId}-${orderId}`}>
                                        <td>
                                          <Button
                                            dataTestId="admin-retrieval-details__requeue-order"
                                            type="button"
                                            bootstrapVariant="secondary"
                                            label="Requeue Order for Processing"
                                            bootstrapSize="sm"
                                            onClick={() => {
                                              onRequeueOrder(orderId)
                                            }}
                                          >
                                            Requeue
                                          </Button>
                                        </td>
                                        <td>{orderId}</td>
                                        <td>{orderNumber}</td>
                                        <td>{type}</td>
                                        <td>{state}</td>
                                        <td className="admin-retrieval-details__order-details">
                                          <pre className="admin-retrieval-details__order-details-pre pre-scrollable">
                                            {JSON.stringify(orderInformation)}
                                          </pre>
                                        </td>
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </Table>
                          )
                        }
                      </article>
                    )
                  })
                }
              </section>
            )
          }
        </Col>
      </Row>
    </div>
  )
}

AdminRetrievalDetails.defaultProps = {
  retrieval: {}
}

AdminRetrievalDetails.propTypes = {
  retrieval: PropTypes.shape({
    collections: PropTypes.arrayOf(PropTypes.shape({})),
    jsondata: PropTypes.shape({}),
    obfuscated_id: PropTypes.string,
    username: PropTypes.string
  }),
  onRequeueOrder: PropTypes.func.isRequired
}

export default withRouter(
  connect(null, null)(AdminRetrievalDetails)
)
