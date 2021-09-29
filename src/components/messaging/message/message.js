import React, { Component } from 'react'
import './message.scss'


class Message extends Component {
    render() {
        return (
            <li className="message-item ">
                <p className="key-in-message key-in-message-1">{this.props.sender}</p>
                <p className="text-message">{this.props.body}</p>
            </li>
        )
    }
}
export { Message }