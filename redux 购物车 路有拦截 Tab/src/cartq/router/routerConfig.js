import React, { Component } from 'react'
import Cart from '../component/cart'
import My from '../component/my'
import CartSon from '../component/cartSon'
import Detail from '../component/detail'
const routers=[
    {
        path:'/cart',
        component:Cart,
       
    },
    {
        path: '/detail',
        component: Detail,

    },
     {
        path: '/my',
        component: My,
         children: [
             {
                 path: '/my/cartSon',
                 component: CartSon
             },
             {
                 path: '/my',
                 redirect: '/my/cartSon'
             },
         ]
    },
    {
        path:'/',
        redirect:'/cart'
    }
]
export default routers