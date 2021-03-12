import React, { Component } from 'react'
import './menu.scss'


class Menu extends Component {
    constructor(props) {
        super(props);
        // this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            // active: true,
            active: this.props.menuToggle,
        };
    }
    menuClose = () => {
        this.props.closeMe()
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.active !== nextProps.menuToggle) {
            this.setState({ active: nextProps.menuToggle })
        } return true;
    }
    render() {
        return (

            // <div className="menu-open-hide">
            <div className={this.state.active ? 'menu-open' : 'menu-open-hide'} >
                <button onClick={this.menuClose} className=" menu-close" type="button" aria-label="close menu">
                    <svg className=" close-menu-svg" width="50px" height="50px">
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
            </div >

        )
    }
}
export { Menu }