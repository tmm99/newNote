import React, { Component } from 'react'
import Knowledge from '../routerComponent/Knowledge'
import Community from '../routerComponent/Community'
import My from '../routerComponent/My'
import Com from '../routerComponent/Com'
import People from '../routerComponent/People'
import Fa from '../routerComponent/Fa'
import Ma from '../routerComponent/Ma'

const routers=[
    {
        path:"/knowledge",
        component:Knowledge
    },
    {
        path:"/community",
        component:Community,
        children:[
            {
                path: "/community/com",
                component: Com
            },
            {
                path: "/community/people",
                component: People
            },
            {
                path: "/community",
                redirect: "/community/com"
            }
          
        ]
    },
    {
        path: "/my",
        component: My
    },
    {
        path: "/fa",
        component: Fa
    },
    {
        path: "/ma",
        component: Ma
    },
    {
        path:"/",
        redirect:"/community"
    }
]
export default routers
