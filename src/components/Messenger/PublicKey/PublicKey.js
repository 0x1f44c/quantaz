import React, { Component } from 'react'

class PublicKey extends Component {

    render() {
        const { publicKey } = this.props;
        return (
            <li onClick={() => this.props.onPublicKeyClick(publicKey)}
                className="public-keys-item" id={publicKey.key}>{publicKey.publicKey} </li>

        )
    }


}
export { PublicKey }
