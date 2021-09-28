import React, { Component } from 'react'
import './publicKeys.scss'
import { AddKey } from '../addKey/addKey'
import shortId from 'shortid'
// import { Redirect } from 'react-router';



class PublicKeys extends Component {
    state = {
        publicKeys: [
            {
                publicKey: '4444',
                key: shortId.generate(),
            },
            {
                publicKey: '5555',
                key: shortId.generate(),
            }
        ],
        addKeyToggle: false,
    };

    closeMe = () => {
        this.setState({ addKeyToggle: false })

    }
    addKeyOpen = () => {
        console.log('key-open');
        if (this.state.addKeyToggle === true) {
            this.setState({ addKeyToggle: false })
        } else {
            this.setState({ addKeyToggle: true })
        }
        console.log(this.state.addKeyToggle);
    }

    addPublicKey = ({ key }) => {
        if (this.state.publicKeys.some(publicKey => publicKey.publicKey === key)) {
            console.log(alert(`${key} is already in your list`));
            return;
        }
        const newKey = {
            key: shortId.generate(),
            publicKey: key,
        }
        const newKeys = this.state.publicKeys;
        newKeys.push(newKey);
        this.setState({ publicKeys: newKeys });
    }
    onPublicKeyClick = (publicKey) => {
        console.log(`click into ${publicKey}`);
        this.props.showActivePublicKeyMessaging(publicKey);
    }

    render() {
        const { publicKeys } = this.state;
        return (
            <section className="public-keys-section">
                <h2 className="public-keys">public keys</h2>
                <ul className="public-keys-wrapper list">{
                    publicKeys.map(({ publicKey, key }) => {
                        return (
                            this.state.publicKeys && <li className="public-keys-item" id={key} key={key}>
                                <button
                                    className="public-key-btn"
                                    onClick={() => this.onPublicKeyClick(publicKey)}
                                >{publicKey}</button>
                            </li>
                        )
                    }
                    )}
                    <li className="public-keys-item">
                        <button onClick={this.addKeyOpen} className="public-key-add-btn" type="button">add</button>
                    </li>
                </ul>
                <AddKey addPublicKey={this.addPublicKey} addKeyToggle={this.state.addKeyToggle} closeMe={this.closeMe}></AddKey>
            </section>

        )
    }
}

export { PublicKeys }

// (console.log(`click into ${publicKey}`))
