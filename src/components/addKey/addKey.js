import React, { Component } from 'react'
import './addKey.scss'



class AddKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.addKeyToggle,
        };
    }
    addKeyClose = () => {
        this.props.closeMe()
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.active !== nextProps.addKeyToggle) {
            this.setState({ active: nextProps.addKeyToggle })
        } return true;
    }
    render() {
        return (
            <div className={this.state.active ? 'add-key-modal-wrapper' : 'add-key-modal-wrapper-hide'}>
                <div className="add-key-modal">
                    <button onClick={this.addKeyClose} className="add-key-close-btn" type="button">
                        <svg className=" close-menu-svg" width="30px" height="30px">
                            <use className="icon-menu-close" href="./sprite.svg#icon-menu-close"></use>
                        </svg>
                    </button>
                    <p className="new-key-text">
                        New key
                </p>
                    <div className="add-key-decoration-line"></div>
                    <div className="wrapper-key-and-input">
                        <p className="key-text">Key:</p>
                        <input className="add-key-input"></input>
                    </div>
                    <div className="wrapper-for-buttons">
                        <button type="button" className="add-key-btn add-key-btn-ok">ok</button>
                        <button type="button" className="add-key-btn add-key-btn-cancel">cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export { AddKey }