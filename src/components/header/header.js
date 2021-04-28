import React, { Component } from 'react'
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
                        <a className="link header-logo-landing" href="/" aria-label="logo of privacy guard">PG</a>
                    </h1>
                    <p className="landing-logo-messaging">Messaging</p>
                </div>
                <div className="day-night-container">
                    <input type="checkbox" className="day-night" >
                    </input>
                </div>
                <button onClick={this.menuOpen} className="menu-btn" type="button" aria-label="menu button">
                    <svg className="menu-svg" width="50px" height="50px">
                        <use className="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
                    </svg>
                </button>
                <Menu menuToggle={this.state.menuToggle} closeMe={this.closeMe}></Menu>
            </header>
        )
    }
}
export { Header }
