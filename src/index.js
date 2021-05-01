// External imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

// internal imports
import './index.css'
import * as serviceWorker from './serviceWorker'
import { history } from './utils/history'
import store from './store'

// Component imports
import App from './app'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
          <Header />
            <App />
          <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
