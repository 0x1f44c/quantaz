import React from 'react'
import "./PublicKey.scss"

function PublicKey(props) {
    const { publicKey } = props;
    return (
        <li onClick={() => props.onPublicKeyClick(publicKey)}
            className="public-key-item" id={publicKey.key}>{publicKey.publicKey} </li>
    )
}
export { PublicKey }
