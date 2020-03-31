import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        let { name, IdNumber, social, phone } = this.props
        console.log(name, IdNumber, social, phone)

        return (
            <div>
                登录
            </div>
        )
    }
}
