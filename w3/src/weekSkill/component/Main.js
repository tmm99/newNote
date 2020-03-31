import React, { Component } from 'react'

import routerConfig from '../router/routerConfig'
import RouterView from '../router/routerView'
import Footer from '../component/Foot'

import { BrowserRouter } from 'react-router-dom'
//路由跳转内容
export default class Main extends Component {
    render() {
        return (
            <div className="main">
                {/* <Left />
                <Right /> */}

                <BrowserRouter>
                    <div className="routV">
                    <RouterView routers={routerConfig}></RouterView>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}
