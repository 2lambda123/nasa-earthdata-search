import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import actions from '../../actions/index'

import OrderStatusContainer from '../../containers/OrderStatusContainer/OrderStatusContainer'
import SecondaryToolbarContainer
  from '../../containers/SecondaryToolbarContainer/SecondaryToolbarContainer'

const mapStateToProps = state => ({
  order: state.order
})

const mapDispatchToProps = dispatch => ({
  onChangePath:
    newHeight => dispatch(actions.masterOverlayPanelResize(newHeight))
})

export const Data = ({
  order = {},
  onChangePath
}) => {
  const { jsondata = {} } = order
  const { source } = jsondata
  return (
    <div className="route-wrapper route-wrapper--dark route-wrapper--content-page">
      <div className="route-wrapper__content">
        <header className="route-wrapper__header">
          <SecondaryToolbarContainer />
        </header>
        <nav className="route-wrapper__content-nav">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            className="route-wrapper__content-nav-link"
            to={{
              pathname: '/projects',
              search: source
            }}
            onClick={() => { onChangePath(`/projects/${source}`) }}
          >
            <i className="fa fa-arrow-circle-o-left" />
            {' Back to Project'}
          </Link>
        </nav>
        <div className="route-wrapper__content-inner">
          <Switch>
            <Route path="/data/retrieve/:id" component={OrderStatusContainer} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Data.propTypes = {
  onChangePath: PropTypes.func.isRequired,
  order: PropTypes.shape({}).isRequired
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Data)
)
