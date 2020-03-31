import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

function Router(props){ 
    const {routers}=props
    let routerArr=routers.filter(item=>!item.redirect)
    let redirectArr=routers.filter(item=>item.redirect).map((item,index)=>
      <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
    )
    return <Switch>
        {
            routerArr && routerArr.map((item,index)=>
                 <Route key={index} path={item.path} render={(props)=>{
                   return <item.component {...props} child={item.children}></item.component>
                }}></Route>).concat(redirectArr)

        }
    </Switch>
}
export default Router