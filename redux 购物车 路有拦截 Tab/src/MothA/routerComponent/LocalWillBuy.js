import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import RouterView from '../router/routerView'

export default class LocalWillBuy extends Component {
    render() {
        return (
            <div className="buy">
                <div className="buyNav">
                    
                    <NavLink to='/localWillBuy/all'>全部</NavLink>
                    <NavLink to='/localWillBuy/cirl'>商圈</NavLink>
                    <NavLink to='/localWillBuy/supermarct'>超市</NavLink>
                   
                </div> 
            
                        <RouterView routers={this.props.child}></RouterView>
                   
            </div>
        )
    }
}





