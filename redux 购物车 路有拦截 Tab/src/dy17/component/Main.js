import React, { Component } from 'react'
import Cont from './Cont'
import Head from './Head'
import Footer from './Footer'
export default class Main extends Component {
    render() {
        return (
            <div className="main">
               <Head/>
                <Cont/>
               <Footer/>
            </div>
        )
    }
}
