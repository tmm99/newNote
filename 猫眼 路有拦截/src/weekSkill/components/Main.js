import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'

import {BrowserRouter,Route,Redirect,NavLink,Switch} from 'react-router-dom'
import Detail from '../router/detail'
export default class Main extends Component {
    state={
        data:[]
    }
    render() {
        let {data}=this.state
        console.log(data)
        return (
            <BrowserRouter> 
            <Switch>
            <Route path="/detail" component={Detail}>
                       
            </Route>
            <NavLink to="/detail">

                        <div className="main">


                            {
                                data && data.map((item, index) => <div key={index} className="rendData" onClick={this.handleClick.bind(this)}>

                                    <dl>{item.name}</dl>

                                    <dt>{item.txt}</dt>
                                    <dd><img src={item.img} className="img" /></dd>
                                </div>)
                            }

                        </div>
            </NavLink>
           
                  </Switch>  
            </BrowserRouter>
        )
    }
    componentDidMount(){
        axios.get('/list').then((res)=>{
            this.setState({data:res.data.data})
            // console.log(res)
        })
    }
    handleClick(){
        // alert(1)
    }
}
