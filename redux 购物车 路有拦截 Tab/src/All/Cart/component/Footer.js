import React, { Component } from 'react'
import {BrowserRouter,NavLink} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/page">首页</NavLink>
                <NavLink to="/cart">购物车</NavLink>
                <NavLink to="/my">我的</NavLink>
                <NavLink to="/store">收藏</NavLink>

            </div>
        )
    }
}
