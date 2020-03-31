/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 08:51:45
 * @LastEditTime: 2019-08-17 09:40:24
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"
import RouterView from "./RouterView"
import route from "./RouteList"
import Header from '../components/Header'
import Footer from '../components/Footer'
class index extends Component {
    render() {
        return (
            <>
                <Header/>
                <HashRouter>
                    <RouterView route={route}/>
                    <Footer/>
                </HashRouter>
            </>
        );
    }
}

export default index;