import React, { Component } from 'react'
import './contact.scss'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'


class Contact extends Component {
    render() {
        return (
            <div className="bg-for-landing bg-info">
                <div className="container info-container">
                    <main className="main-landing-container main-info-pages contact-page">
                        <h2 className="info-title">Contact us</h2>
                        <p className="info-text contact-text">Country: Ukraine</p>
                        <p className="contact-text-special">Do you have something to ask or suggest?<br></br>Please write to us</p>
                        <p ><a className="link contact-text" href="mailto:writetous@gmail.com">email:writetous@gmail.com</a></p>
                        <svg className="icon-arrow" width="65px" height="65px">
                            <use href="./sprite.svg#icon-arrow"></use>
                        </svg>
                    </main>
                </div>
            </div >
        )
    }
}
export { Contact }
