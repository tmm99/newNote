import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'

import Head from './Head';
import Footer from './Footer';
import Movie from '../router/Movie'
import Cinema from '../router/Cinema'
import My from '../router/My'
import Login from '../router/Login'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
               
                <Head />
            
                <BrowserRouter >
                    <Switch>
                        <Route path="/Movie" component={Movie}></Route>
                        <Route path="/Cinema" component={Cinema}></Route>
                        <Route path="/My" component={My}></Route>
                     
                      
                        {/* <Redirect to="/Movie/ing"></Redirect> */}
                    </Switch>

                    <Footer/>
                    {/* <NavLink to="/Movie">电影</NavLink>
                    <NavLink to="/Cinema">影院</NavLink>
                    <NavLink to="/My">我的</NavLink> */}
                    {/* <Redirect to="/Home"></Redirect> */}
                </BrowserRouter>

            </div>
        )
    }
}
