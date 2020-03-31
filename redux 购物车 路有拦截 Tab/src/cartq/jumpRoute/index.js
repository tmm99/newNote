import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Index extends Component {
    render() {
        return (
            <div className="jump">
                <NavLink to="/cart">cart</NavLink>
                <NavLink to="/my">my</NavLink>

            </div>
        )
    }
}
