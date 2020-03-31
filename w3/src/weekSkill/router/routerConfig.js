import React, { Component } from 'react'
import Page from '../routerComponent/Page'
import Fen from '../routerComponent/Fen'
import Buy from '../routerComponent/Buy'
import Cart from '../routerComponent/Cart'
import My from '../routerComponent/My'
import Detail from '../routerComponent/Detail'

const routers=[
    {
        path:"/page",
        component:Page
    },
    {
        path: "/fen",
        component: Fen
    },
     {
        path: "/buy",
        component: Buy
    },
     {
        path: "/cart",
        component: Cart
    },
    {
        path: "/my",
        component: My
    },
    {
        path: "/detail",
        component: Detail
    },
    {
        path: "/",
       redirect:"/page"
    }
]
export default routers