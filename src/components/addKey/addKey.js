import React, { Component } from 'react'
import './addKey.scss'



class AddKey extends Component {
    state = {
        active: this.props.addKeyToggle,
        key: '',
    };


    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.active !== nextProps.addKeyToggle) {
            this.setState({ active: nextProps.addKeyToggle })
        } return true;
    }

    addKeyClose = () => {
        this.props.closeMe();
        this.reset();

    }

    handleChange = event => {
        this.setState({ key: event.currentTarget.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('new key');
        this.props.addPublicKey(this.state);
        this.addKeyClose();

    }
    reset = () => {
        this.setState({ key: '' });
    }
    render() {
        return (
            <div className={this.state.active ? 'add-key-modal-wrapper' : 'add-key-modal-wrapper-hide'}>
                <div className="add-key-modal">
                    <button onClick={this.addKeyClose} className="add-key-close-btn" type="button">X</button>
                    <form onSubmit={this.handleSubmit}>
                        <label>enter the key
                            <input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.key}>
                            </input>
                        </label>
                        <button type="submit">Add key</button>
                    </form>
                </div>
            </div>
        )
    }
}
export { AddKey }


