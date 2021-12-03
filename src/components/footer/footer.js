import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

function Footer() {
    return (
        <footer className="footer-lines footer-down">
            <div className="footer-flex">
                <nav className="footer-navigation">
                    <ul className="list navigation-list">
                        <li className="navigation-list-item">
                            <Link to="/about">About us</Link>
                        </li>
                        <li className="navigation-list-item">
                            <Link to="/license">License</Link>
                        </li>
                        <li className="navigation-list-item">
                            <Link to="/contact">Contact us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <p className="copyright">Copyright 2021 Privacy Guard Messages</p>
        </footer>
    )
}
export { Footer }
