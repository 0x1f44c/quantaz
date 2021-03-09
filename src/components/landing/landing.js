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
            <button className=" menu-btn-only-landing menu-btn-landing" type="button" aria-label="menu button">
              <svg className=" menu-svg" width="50px" height="50px">
                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
              </svg>
            </button>
            <div className="menu-open">

              <button className=" menu-close" type="button" aria-label="close menu">
                <svg className=" close-menu-svg" width="40px" height="40px">
                  <use className="icon-menu-close" href="./sprite.svg#icon-menu-close"></use>
                </svg>
              </button>

              <ul className="list menu-list">
                <li className="menu-item">
                  <a href="/keys" aria-label="autorization">autorization</a>
                </li>
                <li className="menu-item">
                  <a href="/msg" aria-label="messaging">messaging</a>
                </li>
                <li className="menu-item">
                  <a href="/about" aria-label="about us">about us</a>
                </li>
                <li className="menu-item">
                  <a href="/license" aria-label="license">license</a></li>
                <li className="menu-item">
                  <a href="/contact" aria-label="contact us">contact us</a>
                </li>
              </ul>

            </div>
          </header>

          <main className="main-landing-container">
            <a className="cool-button" href="/keys">message</a>
            <section className="benefits-section">
              <ul className="list benefits-list">
                <li className="benefit-item">
                  <svg width="60px" height="60px">
                    <use href="./sprite.svg#icon-lock"></use>
                  </svg>
                  <h2>secure</h2>
                  <p></p>
                </li>
                <li className="benefit-item">
                  <svg width="60px" height="60px">
                    <use href="./sprite.svg#icon-shield"></use>
                  </svg>
                  <h2>anonymous</h2>
                  <p></p>
                </li>
              </ul>
            </section>
          </main>
          <footer className="container footer-lines footer-down">
            <a className="footer-logo" href="/" aria-label="logo of privacy guard">PG</a>
            <div className="footer-flex">
              <nav className="footer-navigation">
                <ul className="list navigation-list">
                  <li className="navigation-list-item">
                    <a href="/about" aria-label="about us">About us</a>
                  </li>
                  <li className="navigation-list-item">
                    <a href="/license" aria-label="license">License</a>
                  </li>
                  <li className="navigation-list-item">
                    <a href="/contact" aria-label="contact us">Contact us</a>
                  </li>
                </ul>
              </nav>
              <p className="copyright">Copyright 2021 Privacy Guard Messages</p>
            </div>
          </footer>
        </div>

      </div>


    )
  }
}

export { Landing }
