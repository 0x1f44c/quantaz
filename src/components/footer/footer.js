import React, { Component } from 'react'
import './footer.scss'


class Footer extends Component {
    render() {
        return (
            <footer className="footer-lines footer-down">
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
                </div>
                <p className="copyright">Copyright 2021 Privacy Guard Messages</p>
            </footer>

        )
    }
}
export { Footer }
