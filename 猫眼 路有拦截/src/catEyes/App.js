import React, { Component } from 'react'
import Head from './component/Head';
import Home from './component/Home'
import Detail from './router/Detail'
// import Login from './component/Login'
import MyHoldUp from './router/MyHoldUp'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './style/style.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
             
              
           <Home/>
             <BrowserRouter>
            <Route path="Detail" component={Detail}></Route>
         
            </BrowserRouter>
           
            </div>
        )
    }
}
