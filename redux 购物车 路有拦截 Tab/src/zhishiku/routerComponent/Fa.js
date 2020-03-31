import React, { Component } from 'react'

export default class Fa extends Component {
    render() {
        let {item}=this.props
        console.log(item)
        return (
            <div className="fa">

               宝爸天团：  
               <p>{item}</p>
            </div>
        )
    }
}
