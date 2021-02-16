import React, { Component } from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import { history } from './utils/history'
import { Landing } from './components/landing/landing'
import { Messaging } from './components/messaging/messaging'
import './app.scss'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="app_container">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/msg">
              <Messaging />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default withRouter(App)
