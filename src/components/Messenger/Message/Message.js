import React, { Component } from 'react'
import './Message.scss';


class Message extends Component {
    render() {
        return (
            <li className={this.props.sender === 'me' ? " message-item my-message" : " message-item friend-message"}>
                <p className="key-in-message key-in-message-1">{this.props.sender}</p>
                <p className="text-message">{this.props.body}</p>
            </li>
        )
    }
}
export { Message }

