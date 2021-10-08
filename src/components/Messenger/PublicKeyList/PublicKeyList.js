import React, { Component } from 'react'
import './PublicKeyList.scss'
import { AddKey } from '../AddKey/AddKey'
import { PublicKey } from "../PublicKey/PublicKey"

// import axios from 'axios';
// import { Redirect } from 'react-router';



class PublicKeyList extends Component {
    state = {

        addKeyToggle: false,
        loading: true,
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

    onPublicKeyClick = (publicKey) => {
        this.props.showActivePublicKeyMessaging(publicKey);
    }

    render() {
        const { publicKeys } = this.props;
        return (
            <section className="public-keys-section">
                <h2 className="public-keys">public keys</h2>
                <ul className="public-keys-wrapper list">{
                    publicKeys.map(publicKey => {
                        return (
                            <PublicKey publicKey={publicKey}
                                key={publicKey.key}
                                onPublicKeyClick={this.onPublicKeyClick} />
                        )
                    })
                }
                    <li className="public-keys-item">
                        <button onClick={this.addKeyOpen} className="public-key-add-btn" type="button">add</button>
                    </li>
                </ul>
                <AddKey addPublicKey={this.props.addPublicKey} addKeyToggle={this.state.addKeyToggle} closeMe={this.closeMe}></AddKey>
            </section>

        )
    }
}

export { PublicKeyList }


