import React, { Component } from 'react'
import './landing.scss'

class Landing extends Component {
  render() {
    return (
      <div class="bg-for-landing">
        <div className="container landing-container">
          <header class="header-container">
            <div class="landing-logo-div">
              <h1>
                <a className="link  header-logo-ladning" href="/" aria-label="logo of privacy guard">PG</a>
              </h1>
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
            <section class="benefits-section">
              <ul class="list benefits-list">
                <li class="benefit-item">
                  <svg width="80px" height="80px">
                    <use href="./sprite.svg#icon-lock"></use>
                  </svg>
                  <h2>secure</h2>
                  <p></p>
                </li>
                <li class="benefit-item">
                  <svg width="80px" height="80px">
                    <use href="./sprite.svg#icon-shield"></use>
                  </svg>
                  <h2>anonumoys</h2>
                  <p></p>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>

    )
  }
}

export { Landing }
