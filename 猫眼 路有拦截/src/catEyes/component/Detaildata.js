import React, { Component } from 'react'
// import Detail from '../router/Detail'
import My from '../router/My'
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'

export default class Detaildata extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    {/* <Route path="/Detail" component={Movie}></Route> */}
                    <Route path="/Detail" component={Movie}></Route>
                   
                
                </BrowserRouter>  
            </>
        )
    }
}
