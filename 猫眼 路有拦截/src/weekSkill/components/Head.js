import React, { Component } from 'react'
import Banner from './Banner'
import Main from './Main'
export default class Head extends Component {
    render() {
        return (
            <div className="head">
                <div className="headSon">
                     马蜂窝
                </div>
                <Banner/>
                <Main/>
            </div>
        )
    }
}
