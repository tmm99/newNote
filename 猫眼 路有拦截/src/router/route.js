import React, { Component } from 'react'
import Home from './Home'
import Main from './Main'
import Hold from './hold'
import { BrowserRouter, Route, NavLink, Switch,Redirect} from 'react-router-dom'
export default class route extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>                 
                    <Route path="/Main" component={Main}></Route>
                    <Route path="/Hold" component={Hold}></Route>
                    <Route path="/" component={Home}></Route>               
                </Switch>
            </BrowserRouter>
        )
    }
}
