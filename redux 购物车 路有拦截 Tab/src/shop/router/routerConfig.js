import React, { Component } from 'react'
import Main from '../routerComponent/Main'
import My from '../routerComponent/My'
import Collect from '../routerComponent/Collect'
import Detail from '../routerComponent/detail'
import Login from '../routerComponent/Login'
import Cart from '../routerComponent/Cart'


const routers=[
    {
        path:"/main",
        component:Main
    },
    {
        path:"/my",
        component:My
    },
    {
        path:"/collect",
        component:Collect
    },
    {
        path: "/detail/:id",
        component: Detail
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path:"/",
        redirect:"/main"
    }
]

export default routers