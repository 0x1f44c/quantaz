import React, { Component } from 'react'
import { Message } from '../Message/Message'
import { Sender } from '../Sender/Sender'



class MessageList extends Component {
    state = {
        messages: [],
    }
    render() {

        return (
            <section className="messages-section">
                <h2 className="messages">messages from {this.props.activeKey.publicKey}</h2>
                <ul className="list messages-wrapper">{
                    this.props.activeKey.messages.map(({ sender, body, key }) => {
                        return (<Message sender={sender} body={body} key={key} />)
                    })
                }
                </ul>
                <Sender addNewMessage={this.props.addNewMessage} />
            </section>

        )
    }
}
export { MessageList };
