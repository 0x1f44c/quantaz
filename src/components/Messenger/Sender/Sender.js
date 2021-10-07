import React, { Component } from 'react'

class Sender extends Component {
 
    render() {
        return (
                <div className="message-input-div">
                    <input className="message-input" type="text" />
                    <button className="message-btn" type="button" aria-label="send message button">send</button>
                </div>
        )
    }
}
export { Sender };