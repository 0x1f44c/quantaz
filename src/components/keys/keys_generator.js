import React, { useState } from "react";
import { generateKey } from 'openpgp/lightweight';

import './keys.scss';

function KeysGenerator() {
    const [name, setName] = useState('Test');
    const [email, setEmail] = useState('test@email.com');
    const [error, setError] = useState('');
    const [keys, setKeys] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email) {
            setError('Fill in both fields to generate key');
            return;
        }
        const { privateKeyArmored: privateKey, publicKeyArmored: publicKey} =
        await generateKey({
            curve: 'curve25519',
            userIDs: [{ name, email }]
        });

        setKeys({privateKey, publicKey});
    }

    return (
        <div className="bg-for-landing bg-info ">
            <div className="container info-container">
                <main className="main-landing-container main-info-pages">
                    <form onSubmit={handleSubmit}>
                        <label className="info-text-keys">Name&nbsp;
                            <input
                                className="keys-input"
                                type="text"
                                value={name}
                                onChange={e=>setName(e.target.value)}
                            ></input>
                        </label>
                        <label className="info-text-keys">&nbsp;Email&nbsp;
                            <input
                                className="keys-input"
                                type="text"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                            ></input>
                        </label>
                        <button type="submit">Generate</button>
                    </form>
                    <p hidden={!error} color="red">{error}</p>
                    <p className="info-text-keys"> Private Key</p>
                    <textarea
                        rows="15"
                        cols="60"
                        value={keys.privateKey}
                    />
                    <p className="info-text-keys"> Public Key</p>
                    <textarea
                        rows="13"
                        cols="60"
                        value={keys.publicKey}
                    />
                </main>
            </div>
        </div>
    )
}

export { KeysGenerator }
