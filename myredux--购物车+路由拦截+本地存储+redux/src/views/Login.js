/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 08:55:00
 * @LastEditTime: 2019-08-19 16:13:35
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Login extends Component {
    state={name:'',pwd:''}
    render() {
        return (
            <>
                <input type='text' value={this.state.name} onChange={this.setName.bind(this)}/>
                <input type='password' value={this.state.pwd} onChange={this.setPwd.bind(this)}/>
                <button onClick={this.submitFn.bind(this)}>登录</button>
            </>
        );
    }
    setName(e){
        this.setState({name:e.target.value})
    }
    setPwd(e){
        this.setState({pwd:e.target.value})
    }
    submitFn(){
        let {name,pwd} =this.state
        if(name&&pwd){
            localStorage.user=name
            this.props.history.goBack()
        }
    }
}

export default Login;