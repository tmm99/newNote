import React, { Component } from 'react'
import './style/style.css'
import Left from './component/Left'
import Right from './component/Right'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Left/>
                <Right/>
            </div>
        )
    }
}
