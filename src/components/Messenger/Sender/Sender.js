import React, { Component } from 'react'
import shortId from 'shortid'
class Sender extends Component {
    state = {
        enteredMessage: "",
        keyOfMessage: shortId.generate(),
    }
    handleOnChange = event => {
        this.setState({
            enteredMessage: event.currentTarget.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewMessage(event.target[0].value);

        this.setState({
            enteredMessage: "",
            keyOfMessage: "",
        })
    }
    render() {
        return (
            <>
                <div className="message-input-div">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="message-input"
                            type="text"
                            placeholder="enter your message"
                            onChange={this.handleOnChange}
                            value={this.state.enteredMessage}
                        />
                        <button className="message-btn" type="submit" aria-label="send message button">send</button>

                    </form>
                </div>
            </>
        )
    }
}
export { Sender };