import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page extends Component {
    render() {
        return (
            <div>
               
                <NavLink to="/login">我的</NavLink>
                <NavLink to="/page">首页</NavLink>
            </div>
        )
    }
}
