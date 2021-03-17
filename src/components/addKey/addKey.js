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
                    <button onClick={this.addKeyClose} className="add-key-close-btn" type="button">X</button>
                    <p>
                        Window for new key
                </p>
                </div>
            </div>
        )
    }
}
export { AddKey }