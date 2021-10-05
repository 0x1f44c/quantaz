import React, { Component } from 'react'

import './messaging.scss'
import { PublicKeys } from '../publicKeys/publicKeys'
import { Messages } from './messages/messages'


class Messaging extends Component {
  state = {
    activeKey: {
      activeKey: '',
      messages: []
    },
  }

  showActivePublicKeyMessaging = (publicKey) => {
    this.setState({
      activeKey: publicKey,
    })
  }

  render() {
    const { activeKey } = this.state
    return (
      <div className="container">
        <div className="container-for-padding">
          <div className="search-wrapper">
            <input className="search" />
          </div>
          <div className="main-wrapper">
            <main className="container-main container ">
              <div className="main-content-padding">
                <PublicKeys showActivePublicKeyMessaging={this.showActivePublicKeyMessaging}></PublicKeys>
                <Messages activeKey={activeKey} ></Messages>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}
export { Messaging }

