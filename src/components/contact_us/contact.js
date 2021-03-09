import React, { Component } from 'react'
import './contact.scss'
import { Menu } from '../menu/menu'
import { Footer } from '../footer/footer'

class Contact extends Component {
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

                    <main className="main-landing-container main-info-pages contact-page">
                        <h1 className="info-title">Contact us</h1>
                        <p className="info-text contact-text">Country: Ukraine</p>
                        <p className="contact-text-special">Do you have something to ask or suggest?<br></br>Please write to us</p>
                        <p ><a className="link contact-text" href="mailto:writetous@gmail.com">email:writetous@gmail.com</a></p>
                        <svg className="icon-arrow" width="65px" height="65px">
                            <use href="./sprite.svg#icon-arrow"></use>
                        </svg>
                    </main>
                    <Footer></Footer>
                </div>
            </div >
        )
    }
}
export { Contact }