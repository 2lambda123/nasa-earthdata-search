import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'

import store from './store/configureStore'
import history from './util/history'

import FooterContainer from './containers/FooterContainer/FooterContainer'

import Search from './routes/Search/Search'
import Project from './routes/Project/Project'
import Granules from './routes/Granules/Granules'
import Data from './routes/Data/Data'
import ConnectedUrlQueryContainer from './containers/UrlQueryContainer/UrlQueryContainer'
import ConnectedAuthTokenContainer from './containers/AuthTokenContainer/AuthTokenContainer'
import AuthRequiredContainer from './containers/AuthRequiredContainer/AuthRequiredContainer'
import ConnectedEdscMapContainer
  from './containers/MapContainer/MapContainer'
import ConnectedAuthCallbackContainer
  from './containers/AuthCallbackContainer/AuthCallbackContainer'
import ShapefileDropzoneContainer from './containers/ShapefileDropzoneContainer/ShapefileDropzoneContainer'
import ShapefileUploadModalContainer from './containers/ShapefileUploadModalContainer/ShapefileUploadModalContainer'

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
  }

  componentDidMount() {
    this.shapefileDropzoneRef = React.createRef()
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ConnectedAuthTokenContainer>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Earthdata Search</title>
            </Helmet>
            <Switch>
              <Route
                path="/granules"
                render={() => (
                  <AuthRequiredContainer>
                    <Granules />
                  </AuthRequiredContainer>
                )}
              />
              <Route
                path="/data"
                render={() => (
                  <AuthRequiredContainer>
                    <Data />
                  </AuthRequiredContainer>
                )}
              />
              <Route path="/">
                <ConnectedUrlQueryContainer>
                  <Switch>
                    <Route exact path="/">
                      <Redirect to="/search" />
                    </Route>
                    <Route path="/search" component={Search} />
                    <Route
                      path="/projects"
                      render={() => (
                        <AuthRequiredContainer>
                          <Project />
                        </AuthRequiredContainer>
                      )}
                    />
                    <Route exact path="/auth_callback" component={ConnectedAuthCallbackContainer} />
                  </Switch>
                  <ConnectedEdscMapContainer />
                </ConnectedUrlQueryContainer>
              </Route>
            </Switch>
            <FooterContainer />
            <Switch>
              <Route path="/">
                <ShapefileUploadModalContainer />
                <ShapefileDropzoneContainer />
              </Route>
            </Switch>
          </ConnectedAuthTokenContainer>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
