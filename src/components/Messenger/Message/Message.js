import React from 'react'
import './Message.scss';


function Message(props) {
    return (
        <li className={props.sender === 'me' ? " message-item my-message" : " message-item friend-message"}>
            <p className="key-in-message ">{props.sender}</p>
            <p className="text-message">{props.body}</p>
        </li>

    )
}
export { Message }

