import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import { Menu } from '../menu/menu'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuToggle: false,
        };
    }
    closeMe = () => {
        this.setState({ menuToggle: false })
    }
    menuOpen = () => {
        console.log('toggle');
        if (this.state.menuToggle === true) {
            this.setState({ menuToggle: false })
        } else {
            this.setState({ menuToggle: true })
        }
        console.log(this.state.menuToggle);
    }

    render() {
        return (
            <header className="header-container ">
                <div className="landing-logo-div">
                    <h1>
                        <Link className="link header-logo-landing" to="/">PG</Link>
                    </h1>
                    <p className="landing-logo-messaging">Messaging</p>
                </div>
                <button onClick={this.menuOpen} className="menu-btn" type="button" aria-label="menu button">
                    <svg className="menu-svg" width="40px" height="40px">
                        <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                    </svg>
                </button>
                <Menu menuToggle={this.state.menuToggle} menuOpen={this.menuOpen} closeMe={this.closeMe}></Menu>
            </header>
        )
    }
}
export { Header }
