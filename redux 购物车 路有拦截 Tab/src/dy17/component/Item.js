import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {item}=this.props
        console.log(item)
        return (
            <div>
               <div className="itemData">
                    <span>{item.num}</span>
                    <span>{item.date}</span>
                    <span>{item.name}</span>
                    <span>{item.ID}</span>
                    <span>{item.interest}</span>
                    <span>{item.many}</span>
                    <span>{item.pool}</span>
                    <span>{item.handle}</span>

               </div>
            </div>
        )
    }
}
