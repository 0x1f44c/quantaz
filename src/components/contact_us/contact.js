import React, { Component } from 'react'
import './contact.scss'

class Contact extends Component {
    render() {
        return (
            <div class="bg-for-landing bg-info">
                <div className="container info-container">
                    <header class="header-container header-info-pages">
                        <a className="link header-logo-info-pages" href="/" aria-label="logo of privacy guard">PG</a>
                        <button className=" menu-btn-landing" type="button" aria-label="menu button">
                            <svg className=" menu-svg" width="50px" height="50px">
                                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                            </svg>
                        </button>
                    </header>

                    <main class="main-landing-container main-info-pages contact-page">
                        <h1 class="info-title">Contact us</h1>
                        <p class="info-text contact-text">Country: Ukraine</p>
                        <p class="contact-text-special">Do you have something to ask or suggest?<br></br>Please write to us</p>
                        <p ><a class="link contact-text" href="mailto:writetous@gmail.com">email:writetous@gmail.com</a></p>
                        <svg class="icon-arrow" width="65px" height="65px">
                            <use href="./sprite.svg#icon-arrow"></use>
                        </svg>
                    </main>
                    <footer className="container footer-lines footer-down">
                        <a className="footer-logo" href="/" aria-label="logo of privacy guard">PG</a>
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
            </div >
        )
    }
}
export { Contact }