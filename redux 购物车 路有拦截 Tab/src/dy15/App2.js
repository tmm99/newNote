import React, { Component } from 'react'
import App from './App'
import store from './store/store'
import {Provider} from 'react-redux'
export default class App2 extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <App/>
                </Provider>
            </div>
        )
    }
}
