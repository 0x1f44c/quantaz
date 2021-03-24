import React, { Component } from 'react'
import './messaging.scss'
import { PublicKeys } from '../publicKeys/publicKeys'
import { Message } from './message/message'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
// import { AddKey } from '../addKey/addKey'



class Messaging extends Component {

  render() {
    return (
      <div className="container">

        <div className="container-for-padding">
          <div className="search-wrapper">
            <input className="search" />
          </div>
          <div className="main-wrapper">
            <main className="container-main container ">
              <div className="main-content-padding">
                <PublicKeys></PublicKeys>
                <section className="messages-section">
                  <h2 className="messages">messages</h2>
                  <ul className="list messages-wrapper">
                    <Message />
                    <Message />
                    <Message />
                    <Message />

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

      </div>


    )
  }
}

export { Messaging }
