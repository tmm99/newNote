import React, { Component } from 'react'
import Top from './component/Top'
import Down from './component/Down'
import './style/style.css'

import {Provider} from 'react-redux'
import store from './store/store'
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider store={store}>
                        <Top/>
                        <Down/>
                </Provider>
            </div>
        )
    }
}
