import React, { Component } from 'react'

const wrapwithLogin=(Com)=>{ //传个形参 对应的是要进行拦截 那个页面的组件
 class HoldUp extends Component {
    render() {
        return <Com/> 
    }
    //在生命周期中进行判断 若本地存储没有User就要拦截
    componentDidMount(){
        if(!localStorage.user){//本地存储没有 
            this.props.history.push("/Login")//跳到请先注册页面
        }
    }
}
    return HoldUp     //返回这个  组件
}
export default wrapwithLogin //抛出这个函数