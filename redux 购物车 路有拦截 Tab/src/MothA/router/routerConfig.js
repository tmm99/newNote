import React, { Component } from 'react'
import LocalWillBuy from '../routerComponent/LocalWillBuy'
import LocalWillEat from '../routerComponent/LocalWillEat'
import All from '../routerComponent/All'
import Cirl from '../routerComponent/Cirl'
import Supermarct from '../routerComponent/Supermarct'
import Detail from '../routerComponent/Detail'
import Store from '../routerComponent/Store'
const routers=[
    {
        path:"/localWillBuy",
        component: LocalWillBuy,
        children:[
            {
                path: "/localWillBuy/all",
                component: All,
            },
            {
                path: "/localWillBuy/cirl",
                component: Cirl,
            },
            {
                path: "/localWillBuy/supermarct",
                component: Supermarct,
            },
            {
                path:"/localWillBuy",
                redirect:"/localWillBuy/all"
            }
        ]
    },
    {
        path: "/localWillEat",
        component: LocalWillEat
    },
    {
        path: "/detail/:id",
        component: Detail
    },
    {
        path: "/store",
        component: Store
    },
    {
        path: "/",
        redirect:"/localWillBuy"
    }
]
export default routers
