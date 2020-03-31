import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter,HashRouter } from 'react-router-dom'
import RouterView from '../router/routerView'
import routerConfig from '../router/routerConfig'
export default class Main extends Component {
    render() {
        return (
            <div className="main">
                {/* <BrowserRouter> */}
                    <div className="nav">
                        <NavLink to="/localWillBuy">本地必买</NavLink>
                        <NavLink to="/localWillEat">本地必吃</NavLink>
                    </div>
                    <div>
                        
                    </div>
                    <RouterView routers={routerConfig}></RouterView>
                {/* </BrowserRouter> */}
            </div>
        )
    }
}
