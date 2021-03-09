import React, { Component } from 'react'
import './messaging.scss'
import { Message } from './message/message'
import { Menu } from '../menu/menu'


class Messaging extends Component {
  render() {
    return (
      <div className="container">

        <div className="container-for-padding">
          <header className=" header">
            <h1>
              <a className="link header-logo" href="/" aria-label="logo of privacy guard">PG</a>
            </h1>
            <input className="header-input" />
            <button className=" menu-btn " type="button" aria-label="menu button">
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
            <Menu></Menu>
          </header>
          <div className="main-wrapper">
            <main className="container-main container ">
              <div className="main-content-padding">
                <section className="public-keys-section">
                  <h2 className="public-keys">public keys </h2>
                  <ul className="public-keys-wrapper list">
                    <li className="public-keys-item">
                      0x76521e72
                  </li>
                    <li className="public-keys-item">
                      0x76521e72
                  </li>
                  </ul>
                </section>
                <section className="messages-section">
                  <h2 className="messages">messages</h2>
                  <ul className="list messages-wrapper">
                    <Message />

                    <li className="message-item">
                      <p className="key-in-message key-in-message-2">0x7852e1f</p>
                      <p className="text-message">my friend</p>
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
        </div>
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

    )
  }
}

export { Messaging }
