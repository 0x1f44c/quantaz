import React, { Component } from 'react'
import "./PublicKey.scss"

class PublicKey extends Component {

    render() {
        const { publicKey } = this.props;
        return (
            <li onClick={() => this.props.onPublicKeyClick(publicKey)}
                className="public-key-item" id={publicKey.key}>{publicKey.publicKey} </li>

        )
    }


}
export { PublicKey }
