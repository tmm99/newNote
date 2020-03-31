import React, { Component } from 'react'
import Cart from './Cart'
import {Provider} from 'react-redux'
import store from './store'
export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                 <Cart/>
                 </Provider>
            </div>
        )
    }
}
