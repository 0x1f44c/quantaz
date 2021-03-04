import React, { Component } from 'react'
import './landing.scss'

class Landing extends Component {
  render() {
    return (
      <div className="bg-for-landing">
        <div className="container landing-container">
          <header className="header-container">
            <div className="landing-logo-div">
              <h1>
                <a className="link  header-logo-ladning" href="/" aria-label="logo of privacy guard">PG</a>
              </h1>
              <p className="landing-logo-messaging">Messaging</p>
            </div>
            <button className=" menu-btn-landing" type="button" aria-label="menu button">
              <svg className=" menu-svg" width="50px" height="50px">
                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
              </svg>
            </button>
          </header>

          <main className="main-landing-container">
            <a className="cool-button" href="/keys">message</a>
            <section className="benefits-section">
              <ul className="list benefits-list">
                <li className="benefit-item">
                  <svg width="80px" height="80px">
                    <use href="./sprite.svg#icon-lock"></use>
                  </svg>
                  <h2>secure</h2>
                  <p></p>
                </li>
                <li className="benefit-item">
                  <svg width="80px" height="80px">
                    <use href="./sprite.svg#icon-shield"></use>
                  </svg>
                  <h2>anonymous</h2>
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
