import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Ing from './Ing'
import Will from './Will'
export default class Movie extends Component {
    render() {
        return (
            <div className="movie">
                <div className="show">
                    <NavLink to="/Movie/ing">正在热映</NavLink>
                    <NavLink to="/Movie/will">即将上映</NavLink>
                </div>

                <div>
                    <Switch>
                        <Route path="/Movie/ing" component={Ing}></Route>
                        <Route path="/Movie/will" component={Will}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
