import React, { Component } from 'react'
import './keys.scss'
import { Menu } from '../menu/menu'
import { Footer } from '../footer/footer'

class Keys extends Component {
    render() {
        return (
            <div className="bg-for-landing bg-info">
                <div className="container info-container">
                    <header className="header-container header-info-pages">
                        <a className="link header-logo-info-pages" href="/" aria-label="logo of privacy guard">PG</a>
                        <button className=" menu-btn-landing" type="button" aria-label="menu button">
                            <svg className=" menu-svg" width="50px" height="50px">
                                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                            </svg>
                        </button>
                        <Menu></Menu>
                    </header>

                    <main className="main-landing-container main-info-pages">
                        <div className="keys-items-container">
                            <label>
                                <input className="check-keys" type="checkbox"></input>
                            </label>
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