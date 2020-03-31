import React, { Component } from 'react'
import Head from './component/Head'
import Main from './component/Main'
import { Provider } from 'react-redux'
import store from './store/store'
// import { withRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './style/style.css'
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <BrowserRouter>
                        <Head />
                         <Main /> 
                   
                     </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

