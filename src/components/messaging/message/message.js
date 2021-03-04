import React, { Component } from 'react'
import './message.scss'


class Message extends Component {
    render() {
        return (
            <li className="message-item">
                <p className="key-in-message key-in-message-1">0x7852e1f</p>
                <p className="text-message">hello</p>
            </li>
        )
    }
}
export { Message }