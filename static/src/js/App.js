import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'

import configureStore from './store/configureStore'
import history from './util/history'

import FooterContainer from './containers/FooterContainer/FooterContainer'

import Search from './routes/Search/Search'
import Project from './routes/Project/Project'
import Downloads from './routes/Downloads/Downloads'
import ConnectedUrlQueryContainer from './containers/UrlQueryContainer/UrlQueryContainer'
import ConnectedAuthTokenContainer from './containers/AuthTokenContainer/AuthTokenContainer'
import AuthRequiredContainer from './containers/AuthRequiredContainer/AuthRequiredContainer'
import ConnectedEdscMapContainer
  from './containers/MapContainer/MapContainer'
import ConnectedAuthCallbackContainer
  from './containers/AuthCallbackContainer/AuthCallbackContainer'
import ShapefileDropzoneContainer from './containers/ShapefileDropzoneContainer/ShapefileDropzoneContainer'
import ShapefileUploadModalContainer from './containers/ShapefileUploadModalContainer/ShapefileUploadModalContainer'
import ConnectedPortalContainer from './containers/PortalContainer/PortalContainer'
import ErrorBannerContainer from './containers/ErrorBannerContainer/ErrorBannerContainer'
import MetricsEventsContainer from './containers/MetricsEventsContainer/MetricsEventsContainer'
import ErrorBoundary from './components/Errors/ErrorBoundary'
import NotFound from './components/Errors/NotFound'

// if (process.env.NODE_ENV !== 'production') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render') // eslint-disable-line global-require

//   whyDidYouRender(React)

//   const { whyDidYouUpdate } = require('why-did-you-update') // eslint-disable-line global-require
//   whyDidYouUpdate(React, { include: [/Search/] })
// }

// Create the root App component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.store = configureStore()
  }

  componentDidMount() {
    this.shapefileDropzoneRef = React.createRef()
  }

  portalPaths(path) {
    return [`/portal/:portalId${path}`, path]
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <MetricsEventsContainer />
            <Switch>
              <Route exact path={this.portalPaths('/')} component={ConnectedPortalContainer} />
            </Switch>
            <ErrorBannerContainer />
            <ConnectedAuthTokenContainer>
              <Switch>
                <Redirect exact from="/data/retrieve/:retrieval_id" to="/downloads/:retrieval_id" />
                <Route
                  path={this.portalPaths('/downloads')}
                  render={() => (
                    <AuthRequiredContainer>
                      <Downloads />
                    </AuthRequiredContainer>
                  )}
                />
                <Route path={this.portalPaths('/projects')} component={Project} />
                <Redirect exact from="/portal/:portalId/" to="/portal/:portalId/search" />
                <Redirect exact from="/" to="/search" />
                <Route
                  path={this.portalPaths('/search')}
                  render={() => (
                    <ConnectedUrlQueryContainer>
                      <Search />
                      <ConnectedEdscMapContainer />
                    </ConnectedUrlQueryContainer>
                  )}
                />
                <Route
                  exact
                  path="/auth_callback"
                  render={() => (
                    <ConnectedUrlQueryContainer>
                      <ConnectedAuthCallbackContainer />
                    </ConnectedUrlQueryContainer>
                  )}
                />
                <Route component={NotFound} />
              </Switch>
              <FooterContainer />
              <Switch>
                <Route path={this.portalPaths('/')}>
                  <ShapefileUploadModalContainer />
                  <ShapefileDropzoneContainer />
                </Route>
              </Switch>
            </ConnectedAuthTokenContainer>
          </ConnectedRouter>
        </Provider>
      </ErrorBoundary>
    )
  }
}

export default App
