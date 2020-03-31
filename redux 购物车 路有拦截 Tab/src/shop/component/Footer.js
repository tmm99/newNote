import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/main">主页</NavLink> 
                <NavLink to="/cart">购物车</NavLink>
                <NavLink to="/collect">收藏</NavLink>              
                <NavLink to="/my">我的</NavLink>

            </div>
        )
    }
}
