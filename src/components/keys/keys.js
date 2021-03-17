import React, { Component } from 'react'
import './keys.scss'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

class Keys extends Component {
    render() {
        return (
            <div className="bg-for-landing bg-info ">
                <div className="container info-container">
                    <Header></Header>
                    <main className="main-landing-container main-info-pages">
                        <div className="keys-items-container">

                            <a className="check-key-link " href="/msg">
                                <button className="check-key-btn check-key-btn-active" type="button" >
                                    <svg className="chek-key-svg" width="104px" height="104px">
                                        <use className="icon-pen-btn" href="./sprite.svg#icon-pen-button"></use>
                                    </svg>
                                </button>
                            </a>
                            {/* <label>
                                <input className="check-keys" type="checkbox"></input>
                            </label> */}
                            <ul className="list ">
                                <li className="keys-list-item">
                                    <p className="info-text-keys">In order to start messaging
                                    please provide your public
                                    and private case.
                                    You should generate them
                                    using GPG (see instructions here)
                        </p>
                                </li>

                                <li className="keys-list-item">
                                    <p className="info-text-keys">Publick key</p>
                                    <input className="keys-input" type="text"></input>
                                </li>


                                <li className="keys-list-item">
                                    <p className="info-text-keys">Private key</p>
                                    <input className="keys-input" type="text"></input>
                                </li>
                                <li className="keys-list-item generate-new-li">
                                    <a href="/" className="generate-new link">or generate new</a>
                                </li>

                            </ul>
                        </div>
                    </main>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
export { Keys }