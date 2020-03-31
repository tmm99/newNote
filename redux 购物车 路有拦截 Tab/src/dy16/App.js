import React, { Component } from 'react'
import Nav from './component/Nav'
import "./style/style.css"
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Nav/>
            </div>
        )
    }
}
