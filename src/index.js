import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import './index.css'
import App from './app'
import * as serviceWorker from './serviceWorker'
import { history } from './utils/history'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'

// ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Header />
        <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
