import React, { Component } from 'react'
import './publicKeys.scss'
import { AddKey } from '../addKey/addKey'



class PublicKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addKeyToggle: false,
        };
    }
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

    render() {
        return (

            <section className="public-keys-section">
                <h2 className="public-keys">public keys </h2>
                <ul className="public-keys-wrapper list">
                    <li className="public-keys-item">
                        0x76521e72
                  </li>
                    <li className="public-keys-item">
                        0x76521e72
                  </li>
                    <li className="public-keys-item">
                        <button onClick={this.addKeyOpen} className="public-key-add-btn" type="button">add</button>
                    </li>
                </ul>
                <AddKey addKeyToggle={this.state.addKeyToggle} closeMe={this.closeMe}></AddKey>
            </section>

        )
    }
}

export { PublicKeys }
