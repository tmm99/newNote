import React, { Component } from 'react'
import Cart from '../routerComponent/Cart'
import My from '../routerComponent/My'
import Page from '../routerComponent/Page'
import Detail from '../routerComponent/Detail'
import Login from '../routerComponent/Login'
import STore from '../routerComponent/STore'

const routers = [
    {
        path: "/page",
        component: Page,

    },
    {
        path: "/detail/:id",
        component: Detail
    },
    {
        path: "/my",
        component: My
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
        path: "/store",
        component: STore,

    },

    {
        path:"/",
       redirect:"/page"
    }
]
export default routers
