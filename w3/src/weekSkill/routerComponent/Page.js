import React, { Component } from 'react'
import Left from '../component/Left'
import Right from '../component/Right'
export default class Page extends Component {
    render() {
        return (
            <div className="page">
               <Left/>
               <Right/>
            </div>
        )
    }
}
