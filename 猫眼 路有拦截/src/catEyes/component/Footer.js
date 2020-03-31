import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Movie from '../router/Movie'
import Cinema from '../router/Cinema'
import My from '../router/My'
import Login from '../router/Login'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">               
                    <NavLink to="/Movie/ing">电影</NavLink>
                    <NavLink to="/Cinema">影院</NavLink>
                    {/* <NavLink to="/Detail">详情</NavLink> */}
                <NavLink to="/My">我的</NavLink>
            </div>
        )
    }
}
