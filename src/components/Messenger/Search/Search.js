import React, { Component } from 'react'
import "./Search.scss"
class Search extends Component {
    render() {
        return (
            <div className="search-wrapper">
                <form>
                    <input className="search"
                        placeholder="enter public key" />
                </form>

            </div>
        )
    }
}
export { Search }
