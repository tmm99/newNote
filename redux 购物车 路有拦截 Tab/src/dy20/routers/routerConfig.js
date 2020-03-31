import React, { Component } from 'react'
import Login from '../routerComponent/Login'
import Page from '../routerComponent/Page'
import Cont from '../routerComponent/Cont'

const routers=[
    {
        path:"/login",
        component:Login
    },
    {
        path:"/page",
        component:Page
    },
    {
        path: "/cont",
        component: Cont
    }
    // {
    //     path:"/",
    //     redirect:"/page"
    // }
]
export default routers


