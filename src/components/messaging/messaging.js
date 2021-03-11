import React, { Component } from 'react'
import './messaging.scss'
import { Message } from './message/message'
import { Menu } from '../menu/menu'
import { Footer } from '../footer/footer'



class Messaging extends Component {
  render() {
    return (
      <div className="container">

        <div className="container-for-padding">

          <header className="header-container header-info-pages">
            <h1>
              <a className="link header-logo-info-pages" href="/" aria-label="logo of privacy guard">PG</a>
            </h1>
            <button className=" menu-btn" type="button" aria-label="menu button">
              <svg className=" menu-svg" width="50px" height="50px">
                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
              </svg>
            </button>

            <div className="day-night-container">
              <input type="checkbox" className="day-night" >
              </input>
            </div>

            <input className="header-input" />

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
                    <Message />
                    <Message />
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
        <Footer></Footer>

      </div>

    )
  }
}

export { Messaging }
