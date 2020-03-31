import React, { Component } from 'react'
import Head from './component/Head'
import Main from './component/Main'

import {Provider} from 'react-redux'
import store from './store/store'
// import {BrowserRouter,HashRouter} from 'redux'
import './style/style.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider store={store}>
                     <Head/>
              
                     <Main/>
                </Provider>
             
               
                
            </div>
        )
    }
}
