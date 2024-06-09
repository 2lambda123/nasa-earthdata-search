import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import OrderStatusContainer from '../../containers/OrderStatusContainer/OrderStatusContainer'
import DownloadHistoryContainer from '../../containers/DownloadHistoryContainer/DownloadHistoryContainer'

export const Downloads = ({
  match
}) => {
  const { path } = match

  // TODO: Lazy load the two components? Since user is expected to go to one of the orders if they are on the download page does not make sense
  // Similarly lazy loading the ordering page slightly slows things down further for a route that should be often used
  return (
    <Switch>
      <Route path={`${path}`}>
        <div className="route-wrapper route-wrapper--light route-wrapper--content-page">
          <div className="route-wrapper__content">
            <div className="route-wrapper__content-inner">
              <Switch>
                <Route exact path={`${path}`} component={DownloadHistoryContainer} />
                <Route exact path={`${path}/:id`} component={OrderStatusContainer} />
              </Switch>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  )
}

Downloads.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  }).isRequired
}

export default withRouter(Downloads)
