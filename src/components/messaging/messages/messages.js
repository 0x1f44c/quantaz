import React, { Component } from 'react'
import { Message } from '../message/message'



class Messages extends Component {
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
                <div className="message-input-div">
                    <input className="message-input" type="text" />
                    <button className="message-btn" type="button" aria-label="send message button">send</button>
                </div>
            </section>

        )
    }
}
export { Messages };
