import React, { Component } from 'react'
import RouterView from '../router/routerView'
export default class My extends Component {
    render() {
        return (
            <div>
            我的
              <RouterView routers={this.props.child} />
            </div>
        )
    }
}
