import React, { Component } from 'react'
import axios from 'axios'
import './Messenger.scss'
import { PublicKeyList } from './PublicKeyList/PublicKeyList'
import { MessageList } from './MessageList/MessageList'
import shortId from 'shortid'


class Messenger extends Component {
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
                <PublicKeyList addPublicKey={this.addPublicKey} publicKeys={publicKeys} showActivePublicKeyMessaging={this.showActivePublicKeyMessaging} />
                {this.state.loading ? "Loading..." : <MessageList activeKey={activeKey} />}
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}
export { Messenger }

