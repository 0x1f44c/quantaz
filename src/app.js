// External imports
import React, { Component } from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'

// Internal imports

import './app.scss'
import { history } from './utils/history'

// Component imports
import { Landing } from './components/landing/landing'
import { Messenger } from './components/Messenger/Messenger'
import { About } from './components/about/about'
import { License } from './components/license/license'
import { Contact } from './components/contact_us/contact'
import { Keys } from './components/keys/keys'
import { KeysGenerator } from './components/keys/keys_generator'

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
              <Messenger />
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
            <Route exact path="/keys">
              <Keys />
            </Route>
            <Route path="/keys/generate" >
              <KeysGenerator />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default withRouter(App)
