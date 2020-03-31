import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import Son1 from './son1'
import Son2 from './son2'
export default class Main extends Component {
    render() {
        return (
            <div>
                <NavLink to="/Home">Mian</NavLink>
                <br/>
                <BrowserRouter>

                    <NavLink to="/Main/son1">路由一</NavLink>
                    <NavLink to="/Main/son2">路由二</NavLink>

                    <Route path="/Main/son1" component={Son1}></Route>
                    <Route path="/Main/son2" component={Son2}></Route>
                </BrowserRouter>
            </div>
        )
    }
}
