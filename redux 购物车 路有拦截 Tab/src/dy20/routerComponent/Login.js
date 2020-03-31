import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                登录： <input type="text" /><br />
                密码<input type="password" /><br />
                <button onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
    handleClick() {
        // this.props.history.push('/login')
    }
}
