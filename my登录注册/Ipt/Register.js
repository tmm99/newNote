import React, { Component } from 'react'
import Login from './Login'
export default class Register extends Component {
    state={
        name:"",
        IdNumber:'',
        social :"",
        phone:""
    }
    render() {
        let { name, IdNumber,social,phone}=this.state
        console.log(name, IdNumber, social, phone)
        return (
            <div className="register">
                <p className="head">申请0首付购车</p>
                姓名：<input typ="text" value={name} onChange={this.handleName.bind(this)}/><br/>
                身份证号：<input typ="text" value={IdNumber} onChange={this.handleIdNumber.bind(this)} /><br/>
                社保卡号：<input typ="text" value={social} onChange={this.handlesocial.bind(this)} /><br/>
                手机号：<input typ="text" value={phone} onChange={this.handlephone.bind(this)} /><br/>
                <button onClick={this.handlsub.bind(this)}>申请0首付购车</button>
                <Login/>
          
            </div>
        )
    }
    handleName(e){
        this.setState({name:e.target.value})
    }
    handleIdNumber(e) {
        this.setState({ IdNumber: e.target.value })
    }
    handlesocial(e) {
        this.setState({ social: e.target.value })
    }
    handlephone(e) {
        this.setState({ phone: e.target.value })
    }
    handlsub(){
        let { name, IdNumber, social, phone } = this.state
        localStorage.setItem("name", name)
        localStorage.setItem("IdNumber", IdNumber)
        localStorage.setItem("social", social)
        localStorage.setItem("phone", phone)
    }
}
