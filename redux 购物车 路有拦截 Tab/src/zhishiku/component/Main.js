import React, { Component } from 'react'

import RouterView from '../router/routerView'
import routerConfig from '../router/routerConfig'
export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <RouterView routers={routerConfig}></RouterView>        
            </div>
        )
    }
}
