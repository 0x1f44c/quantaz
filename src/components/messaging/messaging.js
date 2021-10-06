import React, { Component } from 'react'
import axios from 'axios'
import './messaging.scss'
import { PublicKeys } from '../publicKeys/publicKeys'
import { Messages } from './messages/messages'
import shortId from 'shortid'


class Messaging extends Component {
  state = {
    publicKeys: [],
    activeKey: {
      activeKey: '',
      messages: []
    },
  }
  async componentDidMount() {
    this.setState({
      loading: true,
    })
    setTimeout(async () => {
      const response = await axios.get(`http://localhost:5555/publicKeys`)
      this.setState({
        publicKeys: response.data
      })
      this.setState({
        loading: false,
      })
    }, 1000)

  }
  showActivePublicKeyMessaging = (publicKey) => {
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      this.setState({
        activeKey: publicKey,
      })
      this.setState({
        loading: false,
      })
    }, 1000)
  }
  addPublicKey = ({ key }) => {
    if (this.state.publicKeys.some(publicKey => publicKey.publicKey === key)) {
      console.log(alert(`${key} is already in your list`));
      return;
    }
    const newKey = {
      key: shortId.generate(),
      publicKey: key,
      messages: []
    }
    const newKeys = this.state.publicKeys;
    newKeys.push(newKey);
    this.setState({ publicKeys: newKeys });
  }

  render() {
    const { activeKey, publicKeys } = this.state
    return (
      <div className="container">
        <div className="container-for-padding">
          <div className="search-wrapper">
            <input className="search" />
          </div>
          <div className="main-wrapper">
            <main className="container-main container ">
              <div className="main-content-padding">
                <PublicKeys addPublicKey={this.addPublicKey} publicKeys={publicKeys} showActivePublicKeyMessaging={this.showActivePublicKeyMessaging}></PublicKeys>
                {this.state.loading ? "Loading..." : <Messages activeKey={activeKey} ></Messages>}
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}
export { Messaging }

