import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import My from '../routers/my'
import Give from '../routers/give'
import Find from '../routers/find'
import Page from '../routers/page'
export default class Footer extends Component {
    state={
       datas:[
           {
               name:"首页",
                path:"/page",
                component:<Page/>
           },
            {
                name: "推荐",
                path:"/give",
                component: <Give/>
            },
            {
                name: "发现",
                path:"/find",
                component: <Find/>
            },
            {
                name: "我的",
                path:"/my",
                component: <My/>
            }
       ]
    }
    render() {
        let {datas}=this.state
        return (
       
            <BrowserRouter>
                {/* <Switch> */}
                   
                     <div className="footer">
                          {
                              datas&&datas.map((item,index)=><NavLink to={item.path} key={index}>{item.name}</NavLink>
                                  
                              
                              )
                          }
                        

                    </div>
                {/* </Switch> */}
            </BrowserRouter>
       
        )
    }
}
