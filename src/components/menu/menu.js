import React, { Component } from 'react'
import './menu.scss'


class Menu extends Component {
    render() {
        return (

            <div className="menu-open">
                <button className=" menu-close" type="button" aria-label="close menu">
                    <svg className=" close-menu-svg" width="40px" height="40px">
                        <use className="icon-menu-close" href="./sprite.svg#icon-menu-close"></use>
                    </svg>
                </button>
                <ul className="list menu-list">
                    <li className="menu-item">
                        <a href="/keys" aria-label="autorization">autorization</a>
                    </li>
                    <li className="menu-item">
                        <a href="/msg" aria-label="messaging">messaging</a>
                    </li>
                    <li className="menu-item">
                        <a href="/about" aria-label="about us">about us</a>
                    </li>
                    <li className="menu-item">
                        <a href="/license" aria-label="license">license</a></li>
                    <li className="menu-item">
                        <a href="/contact" aria-label="contact us">contact us</a>
                    </li>
                </ul>
            </div>

        )
    }
}
export { Menu }