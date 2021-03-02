import React, { Component } from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import { history } from './utils/history'
import { Landing } from './components/landing/landing'
import { Messaging } from './components/messaging/messaging'
import { About } from './components/about/about'
import { License } from './components/license/license'
import { Contact } from './components/contact_us/contact'

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
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/license">
              <License />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}

export default withRouter(App)
