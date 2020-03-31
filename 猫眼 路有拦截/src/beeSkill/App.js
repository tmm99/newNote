import React, { Component } from 'react'
import Head from './component/Head'
import Main from './component/Main'
import Detail from './component/Detail'
import Footer from './component/footer'

import NewDetaiil from './component/newDetaiil'
import My from './routers/my'
import Give from './routers/give'
import Find from './routers/find'
import Page from './routers/page'
import {BrowserRouter,Route,Redirect,NavLink} from 'react-router-dom'

import './style/style.css'
export default class App extends Component {
    render() {
        return (
            
            <div className="app">
               <Head/>
               <BrowserRouter>
                      <Main/>
                    <Route path="/newdetail" component={NewDetaiil}></Route>



                    <Route path="/page" component={Page}></Route>
                    <Route path="/find" component={Find}></Route>
                    <Route path="/my" component={My}></Route>
                    <Route path="/give" component={Give}></Route>

                    <Route path="/" component={Detail}></Route>

                
                   
                    
                 </BrowserRouter>
               <Footer/>
            </div>
        )
    }
}
