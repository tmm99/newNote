import React, { Component } from 'react'
import Head from './component/Head'
import Main from './component/Main'
import './style/style.css'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './routers/routerView'
import routerConfig from './routers/routerConfig'
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Head/>
                <BrowserRouter>
                    <RouterView routers={routerConfig}>
                        <Main/>
                     </RouterView>
                </BrowserRouter>
            </div>
        )
    }
}
