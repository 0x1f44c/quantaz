import React, { Component } from 'react'
import './header.scss'
import { Menu } from '../menu/menu'


class Header extends Component {
    sayHello() {
        alert('Hello!');
    }
    render() {
        return (
            <header className="header-container ">
                <div className="landing-logo-div">
                    <h1>
                        <a className="link header-logo-landing" href="/" aria-label="logo of privacy guard">PG</a>
                    </h1>
                    <p className="landing-logo-messaging">Messaging</p>
                </div>
                <div className="day-night-container">
                    <input type="checkbox" className="day-night" >
                    </input>
                </div>
                <button className=" menu-btn" type="button" aria-label="menu button">
                    <svg className=" menu-svg" width="50px" height="50px">
                        <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                    </svg>
                </button>
                <Menu></Menu>
            </header>
            // <header className="header-container header-info-pages">
            //     <h1>
            //         <a className="link header-logo-info-pages" href="/" aria-label="logo of privacy guard">PG</a>
            //     </h1>
            //     <button onClick={this.sayHello} className=" menu-btn" type="button" aria-label="menu button">
            //         <svg className=" menu-svg" width="50px" height="50px">
            //             <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
            //         </svg>
            //     </button>
            //     <Menu></Menu>
            // </header>

        )
    }
}
export { Header }