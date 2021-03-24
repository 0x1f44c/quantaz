import React, { Component } from 'react'
import './settings.scss'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

class Settings extends Component {
    render() {
        return (

            <div className="container">
                <Header></Header>
                <main className="main-landing-container ">
                    <h2 className="info-title">Settings</h2>
                    <section className="info-text info-text-settings">
                        <p className="settings-text">Network getaway</p>
                        <div className="settings-input-and-btn">
                            <input className="settings-input"></input>
                            <button type="button" className="settings-button">save</button>
                        </div>

                    </section>
                </main>
                <Footer></Footer>
            </div>

        )
    }
}
export { Settings }