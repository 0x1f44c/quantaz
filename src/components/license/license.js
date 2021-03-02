import React, { Component } from 'react'
import './license.scss'

class License extends Component {
    render() {
        return (
            <div class="bg-for-landing bg-info">
                <div className="container info-container">
                    <header class="header-container header-info-pages">
                        <a className="link header-logo-info-pages" href="/landing" aria-label="logo of privacy guard">PG</a>
                        <button className=" menu-btn-landing" type="button" aria-label="menu button">
                            <svg className=" menu-svg" width="50px" height="50px">
                                <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                            </svg>
                        </button>
                    </header>

                    <main class="main-landing-container main-info-pages">
                        <h1 class="info-title">License</h1>
                        <section class="info-text">
                            <h2 class="license-title">MIT License</h2>

                            <p class="license-title">Copyright (c) 2021 0x1f44c</p>

                            <p class="license-big-paragraph">Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the "Software"), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:

                            The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.

                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE. </p>
                        </section>
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
export { License }