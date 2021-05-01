import React, { Component } from 'react'
import { useSelector } from 'react-redux';

import './keys.scss'

const Keys = () => {
    const keys = useSelector(state => state.keys);

    return (
        <div className="bg-for-landing bg-info ">
            <div className="container info-container">
                <main className="main-landing-container main-info-pages">
                    <div className="keys-items-container">

                        <a className="check-key-link" href="/msg">
                            <button className="check-key-btn check-key-btn-active" type="button">
                                <svg className="chek-key-svg" width="104px" height="104px">
                                    <use className="icon-pen-btn" href="./sprite.svg#icon-pen-button"></use>
                                </svg>
                            </button>
                        </a>
                        <ul className="list ">
                            <li className="keys-list-item">
                                <p className="info-text-keys">In order to start messaging
                                please provide your public
                                and private keys.
                                You should generate them
                                using GPG (see instructions here)
                    </p>
                            </li>

                            <li className="keys-list-item">
                                <p className="info-text-keys"> Public key</p>
                                <input
                                    className="keys-input"
                                    type="text"
                                    value={keys.public}
                                ></input>
                            </li>

                            <li className="keys-list-item">
                                <p className="info-text-keys">Private key</p>
                                <input
                                    className="keys-input"
                                    type="text"
                                    value={keys.private}
                                ></input>
                            </li>
                            <li className="keys-list-item generate-new-li">
                                <a href="/keys/generate" className="generate-new link">or generate new</a>
                            </li>

                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}
export { Keys }
