import React, { Component } from 'react'
import './about.scss'

class About extends Component {
    render() {
        return (

            <div className="bg-for-landing bg-info">
                <div className="container info-container">
                    <header className="header-container header-info-pages">
                        <a className="link header-logo-info-pages" href="/landing" aria-label="logo of privacy guard">PG</a>
                        <button className=" menu-btn-landing" type="button" aria-label="menu button">
                            <svg className=" menu-svg" width="50px" height="50px">
                                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                            </svg>
                        </button>
                    </header>

                    <main className="main-landing-container main-info-pages">
                        <h1 className="info-title">About us</h1>
                        <p className="info-text">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod te
                        mpor incididunt ut labore et dolore magna aliqua. Ut en
                        im ad minim veniam, quis nostrud exercitation ullamco laboris ni
                        si ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehende
                        rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oc
                        caecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </main>
                    <footer className="container footer-lines footer-down">
                        <a className="footer-logo" href="/landing" aria-label="logo of privacy guard">PG</a>
                        <div className="footer-flex">
                            <nav className="footer-navigation">
                                <ul className="list navigation-list">
                                    <li className="navigation-list-item">
                                        <a href="/about" aria-label="about us">About us</a>
                                    </li>
                                    <li className="navigation-list-item">
                                        <a href="/license" aria-label="license">License</a>
                                    </li>
                                    <li className="navigation-list-item">
                                        <a href="/contact" aria-label="contact us">Contact us</a>
                                    </li>
                                </ul>
                            </nav>
                            <p className="copyright">Copyright 2021 Privacy Guard Messages</p>
                        </div>
                    </footer>
                </div>
            </div>

        )
    }
}
export { About }