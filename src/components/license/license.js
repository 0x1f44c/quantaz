import React, { Component } from 'react'
import './license.scss'
import { Menu } from '../menu/menu'
import { Footer } from '../footer/footer'

class License extends Component {
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
                        <h1 className="info-title">License</h1>
                        <section className="info-text">
                            <h2 className="license-title">MIT License</h2>

                            <p className="license-title">Copyright (c) 2021 0x1f44c</p>

                            <p className="license-big-paragraph">Permission is hereby granted, free of charge, to any person obtaining a copy
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
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
export { License }