import React, { Component } from 'react'
import './about.scss'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'


class About extends Component {
    render() {
        return (

            <div className="bg-for-landing bg-info">
                <div className="container info-container">
                    <Header></Header>
                    <main className="main-landing-container main-info-pages">
                        <h2 className="info-title">About us</h2>
                        <p className="info-text">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod te
                        mpor incididunt ut labore et dolore magna aliqua. Ut en
                        im ad minim veniam, quis nostrud exercitation ullamco laboris ni
                        si ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehende
                        rit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oc
                        caecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </main>
                    <Footer></Footer>
                </div>
            </div>

        )
    }
}
export { About }