import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RouterView from '../router/routerView'
import routerConfig from '../router/routerConfig'
export default class Community extends Component {
    render() {
        return (
            <div className="com">
                <div className="comHead">
                    <NavLink to="/community/com">社区</NavLink>
                    <NavLink to="/community/people">达人</NavLink>
                </div>
                <div className="comment">
                        <p onClick={this.handleFa.bind(this)}>宝爸群</p>
                    <p onClick={this.handleMa.bind(this)}>北京妈妈群</p>

                </div>
                <div>
                    <RouterView routers={this.props.child}></RouterView>        
                </div>
            </div>
        )
    }
    handleFa(){
        this.props.history.push("/fa")
    }
    handleMa(){
        this.props.history.push("/ma")

    }
}
