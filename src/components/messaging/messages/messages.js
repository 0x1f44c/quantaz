
import React, { Component } from 'react'

import { Message } from '../message/message'



class Messages extends Component {
    state = {
        messages: [{
            sender: '333',
            body: 'hello',
            key: 1,
        },
        {
            sender: 'me',
            body: 'hi',
            key: 2,
        },
        {
            sender: 'me',
            body: 'new test',
            key: 3,
        },
        {
            sender: '222',
            body: 'bye',
            key: 4,
        }],
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
                <div className="message-input-div">
                    <input className="message-input" type="text" />
                    <button className="message-btn" type="button" aria-label="send message button">send</button>
                </div>
            </section>

        )
    }
}
export { Messages };
