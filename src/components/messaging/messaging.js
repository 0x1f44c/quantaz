import React, { Component } from 'react'
import './messaging.scss'

class Messaging extends Component {
  render() {
    return (
      <div className="container-for-padding">
        <header className="container header">
          <h1>
            <a className="link header-logo" href="/" aria-label="logo of privacy guard">PG</a>
          </h1>
          <input className="header-input" />
          <button className=" menu-btn" type="button" aria-label="menu button">
            <svg className=" menu-svg" width="50px" height="50px">
              <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
            </svg>
          </button>
          <div className="button-container">
            <div className="center">
              <input type="checkbox" className="btn-input" >
              </input>
            </div>
          </div>
        </header>
        <div className="main-wrapper">
          <main className="container-main container ">
            <div className="main-content-padding">
              <section className="public-keys-section">
                <h2 className="public-keys">public keys </h2>
                <ul className="public-keys-wrapper list">
                  <li className="public-keys-item">
                    <svg width="14px" height="14px">
                      <use href="./sprite.svg#icon-rectangle-keys"></use>
                    </svg>0x76521e72
                  </li>
                  <li className="public-keys-item">
                    <svg width="14px" height="14px">
                      <use href="./sprite.svg#icon-rectangle-keys"></use>
                    </svg>0x76521e72
                  </li>
                </ul>
              </section>
              <section className="messages-section">
                <h2 className="messages">messages</h2>
                <ul className="list messages-wrapper">
                  <li className="message-item">
                    <p className="key-in-message key-in-message-1">0x7852e1f</p>
                    <p className="text-message"></p>
                  </li>
                  <li className="message-item">
                    <p className="key-in-message key-in-message-2">0x7852e1f</p>
                    <p className="text-message"></p>
                  </li>
                </ul>
                <div className="message-input-div">
                  <input className="message-input" type="text" />
                  <button className="message-btn" type="button" aria-label="send message button">send</button>
                </div>
              </section>
            </div>
          </main>
        </div>
        <footer className="container footer-lines">
          <a className="footer-logo" href="/landing" aria-label="logo of privacy guard">PG</a>
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
                  <a href="/contact" aria-label="conect us">Contact us</a>
                </li>
              </ul>
            </nav>
            <p className="copyright">Copyright 2021 Privacy Guard Messages</p>
          </div>
        </footer>
      </div>

    )
  }
}

export { Messaging }
