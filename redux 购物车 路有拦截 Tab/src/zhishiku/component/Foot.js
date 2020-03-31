import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Foot extends Component {
    render() {
        return (
            <div className="foot">
              <NavLink to="/knowledge">知识库</NavLink>
                <NavLink to="/community">社区</NavLink>
                <NavLink to="/my">我的</NavLink>

            </div>
        )
    }
}
