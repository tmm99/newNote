import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink,Switch } from 'react-router-dom'
import Main from './Main'
import wrapwithLogin from './holdUp'  //引入路由拦截的封装
//路由拦截
// const wrapWithLogin=(Com)=>{//传个参数 就是下面的组件
//     class newComponent extends Component{//新组建判断登录与否
//         render(){
//             return <Com/>
//         }
//         //在生命周期componentDidMount中判断
//         componentDidMount(){
//             if(!localStorage.user){
//                 this.props.history.push('/main')
//             }
//         }

//     }
//    return newComponent
// }
// export default wrapWithLogin



 class Home extends Component {
    render() {
        return (
            <>
             <NavLink to="/Main">home</NavLink>
          
            </>
        )
    }
}
export default wrapwithLogin(Home)    // 在这里抛出那个封装的路由拦截函数  将此需要拦截的页面作为实参放进去