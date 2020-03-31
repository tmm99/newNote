import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router/routerView'
import routerConfig from './router/routerConfig'

import {Provider} from 'react-redux'
import store from './store/store'

import './style/index.css'

import JumpR from './jumpRoute'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
            
                <RouterView routers={routerConfig}/>
                {/* <JumpR/> */}
            
            </BrowserRouter>
            </Provider>
        )
    }
}




