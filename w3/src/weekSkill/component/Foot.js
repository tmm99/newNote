import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Foot extends Component {
    render() {
        return (
            <div className="footer">
             
                <NavLink to="/page">主页</NavLink>
                <NavLink to="/fen">分类</NavLink>
                <NavLink to="/buy">买</NavLink>
                <NavLink to="/cart">购物车</NavLink>
                <NavLink to="/my">我的</NavLink>

            </div>
        )
    }
}
