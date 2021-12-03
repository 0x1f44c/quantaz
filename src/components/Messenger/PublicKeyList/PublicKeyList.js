import React from 'react'
import { useState } from 'react'
import { AddKey } from '../AddKey/AddKey'
import { PublicKey } from "../PublicKey/PublicKey"
import './PublicKeyList.scss'

function PublicKeyList(props) {

    const [addKeyToggle, setAddKeyToggle] = useState(false);
    // const [loading, setLoading] = useState(true);/maby we will use it in future for loader for ex.

    const closeMe = () => {
        setAddKeyToggle(false);
    }
    const addKeyOpen = () => {
        console.log('key-open');
        if (addKeyToggle === true) {
            setAddKeyToggle(false)
        } else {
            setAddKeyToggle(true)
        }
        console.log(addKeyToggle);
    }

    const onPublicKeyClick = (publicKey) => {
        props.showActivePublicKeyMessaging(publicKey);
    }

    const { publicKeys } = props;
    return (
        <section className="public-keys-section">
            <h2 className="public-keys">public keys</h2>
            <ul className="public-keys-wrapper list">{
                publicKeys.map(publicKey => {
                    return (
                        <PublicKey publicKey={publicKey}
                            key={publicKey.key}
                            onPublicKeyClick={onPublicKeyClick} />
                    )
                })
            }
                <li className="public-key-item">
                    <button onClick={addKeyOpen} className="public-key-add-btn" type="button">add</button>
                </li>
            </ul>
            <AddKey addPublicKey={props.addPublicKey} addKeyToggle={addKeyToggle} closeMe={closeMe}></AddKey>
        </section>
    )
}

export { PublicKeyList }

