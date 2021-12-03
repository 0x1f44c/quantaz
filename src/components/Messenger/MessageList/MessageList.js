import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Message } from '../Message/Message'
import { Sender } from '../Sender/Sender'
import './MessageList.scss'


function MessageList(props) {

    const [messages] = useState([]);

    const messagesEndRef = useRef(null)

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    const scrollToBottom = () => {
        return messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="messages-section">
            <h2 className="messages">messages from {props.activeKey.publicKey}</h2>
            <ul className="list messages-wrapper">{
                props.activeKey.messages.map(({ sender, body, key }) => {
                    return (<Message sender={sender} body={body} key={key} />)
                })
            }
                <div
                    style={{ float: "left", clear: "both", paddingTop: "1em", paddingBottom: "1em" }}
                    ref={messagesEndRef}>
                </div>
            </ul>
            <Sender addNewMessage={props.addNewMessage} />
        </section>
    )

}
export { MessageList };

