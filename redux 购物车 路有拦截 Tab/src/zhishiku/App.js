import React, { Component } from 'react'
import "./style/style.css"
import Head from './component/Head'
import Main from './component/Main'
import Foot from './component/Foot'
import { BrowserRouter } from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Head />
               
                <BrowserRouter>
                    <Main />
                    <Foot />
                </BrowserRouter>
            </div>
        )
    }
}
