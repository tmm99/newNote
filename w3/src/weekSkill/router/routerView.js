import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
function Router(props){
    const {routers}=props
    let routerArr=routers.filter((item)=>!item.redirect)
    let redirectArr=routers.filter((item)=>item.redirect).map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}></Redirect>)
    return <Switch>
        {
            routerArr&&routerArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
              return <item.component {...props} ></item.component>
            }}></Route>).concat(redirectArr)
        }
    </Switch>
    
}
export default Router