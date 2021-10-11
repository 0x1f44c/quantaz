import React, { Component } from 'react'
import { Message } from '../Message/Message'
import { Sender } from '../Sender/Sender'
import './MessageList.scss'


class MessageList extends Component {
    state = {
        messages: [],
    }
    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
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
                    <div style={{ float: "left", clear: "both", paddingTop: "1em", paddingBottom: "1em" }}
                        ref={(el) => { this.messagesEnd = el; }}></div>
                </ul>
                <Sender addNewMessage={this.props.addNewMessage} />
            </section>

        )
    }
}
export { MessageList };
