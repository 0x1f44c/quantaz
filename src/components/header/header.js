import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../menu/menu'
import './header.scss'


function Header() {
    const [menuToggle, setMenuToggle] = useState(false);
    const closeMe = () => {
        setMenuToggle(false);
    }
    const menuOpen = () => {
        console.log('toggle');
        if (menuToggle === true) {
            setMenuToggle(false)
        } else {
            setMenuToggle(true)
        }
        console.log(menuToggle);
    }

    return (
        <header className="header-container ">
            <div className="landing-logo-div">
                <h1>
                    <Link className="link header-logo-landing" to="/">PG</Link>
                </h1>
                <p className="landing-logo-messaging">Messaging</p>
            </div>
            <button onClick={menuOpen} className="menu-btn" type="button" aria-label="menu button">
                <svg className="menu-svg" width="40px" height="40px">
                    <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                </svg>
            </button>
            <Menu menuToggle={menuToggle} menuOpen={menuOpen} closeMe={closeMe}></Menu>
        </header>
    )
}
export { Header }


