import React, { Component } from 'react'
import './landing.scss'

class Landing extends Component {
  render() {
    return (
      <div class="bg-for-landing">
        <div className="container landing-container">
          <header class="header-container">
            <div class="landing-logo-div">
              <p>
                <a className="link  header-logo-ladning" href="/" aria-label="logo of privacy guard">PG</a>
              </p>
              <p class="landing-logo-messaging">Messaging</p>
            </div>
            <button className=" menu-btn-landing" type="button" aria-label="menu button">
              <svg className=" menu-svg" width="50px" height="50px">
                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
              </svg>
            </button>

          </header>
          <main class="main-landing-container">
            <a class="cool-button" href="/msg">message</a>
          </main>
        </div>
      </div>

    )
  }
}

export { Landing }
