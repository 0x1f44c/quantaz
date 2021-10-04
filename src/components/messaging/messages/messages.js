
import React, { Component } from 'react'

import { Message } from '../message/message'



class Messages extends Component {
    state = {
        messages: [{
            sender: '333',
            body: 'hello',
        },
        {
            sender: 'me',
            body: 'hi',
        },
        {
            sender: 'me',
            body: 'new test',
        },
        {
            sender: '222',
            body: 'bye',
        }],
    }
    render() {

        return (
            <section className="messages-section">
                <h2 className="messages">messages from {this.props.activeKey}</h2>
                <ul className="list messages-wrapper">{
                    this.state.messages.map(({ sender, body }) => {
                        return (<Message sender={sender} body={body} />)
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
