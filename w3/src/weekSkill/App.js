import React, { Component } from 'react'


import Main from './component/Main'

import Head from './component/Head'
import "./style/style.css"

//头部与内容

export default class App extends Component {
    render() {
        return (
            <div className="app">
                
                <Head/>
                <Main/>
           
            </div>
        )
    }
}
