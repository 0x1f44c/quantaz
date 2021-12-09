import React from 'react'
import { useState } from 'react';
// import shortId from 'shortid'//probably, we dont need id generator here, we make it in Messenger
import "./Sender.scss"

function Sender(props) {
    const [enteredMessage, setEnteredMessage] = useState('');
    // const [keyOfMessage,setKeyOfMessage] = useState(shortId.generate());

    const handleSubmit = event => {
        event.preventDefault();
        props.addNewMessage(event.target[0].value);

        setEnteredMessage('');
        // setKeyOfMessage('');
    }

    return (
        <div className="message-input-div">
            <form onSubmit={handleSubmit}>
                <input
                    className="message-input"
                    type="text"
                    placeholder="enter your message"
                    onChange={event => setEnteredMessage(event.currentTarget.value)}
                    value={enteredMessage}
                />
                <button className="message-btn" type="submit" aria-label="send message button">send</button>

            </form>
        </div>
    )

}
export { Sender };

