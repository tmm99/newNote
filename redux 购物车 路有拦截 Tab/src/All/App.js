import React, { Component } from 'react'
import './Cart/style/style.css'
import Head from './Cart/component/Head'
import Main from './Cart/component/Main'

import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Cart/store/store'
import RouterView from './Cart/router/routerView'
import routerConfig from './Cart/router/routerConfig'
import Footer from './Cart/component/Footer'
// import { BrowserRouter } from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider store={store}>                  
                        <Head /> 
                        <BrowserRouter >
                        <div className="main">
                            <div className="showMsg">
                                <RouterView routers={routerConfig}></RouterView>
                          
                            </div>
                            <div className="foot">
                                <Footer />
                            </div>
                        </div>
                    </BrowserRouter >
                </Provider>
            </div>
        )
    }
}
