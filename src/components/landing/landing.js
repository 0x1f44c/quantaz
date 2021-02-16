import React, { Component } from 'react'
import './landing.scss'

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <p>Privacy Guard Messaging</p>
        <a className="cool-button" href="/msg">Start messaging</a>
      </div>
    )
  }
}

export { Landing }
