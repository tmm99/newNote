import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Login from './Login'
export default class MyHoldUp extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Route path="/Login" component={Login}></Route>
                   
                </BrowserRouter>
            </>
        )
    }
}
