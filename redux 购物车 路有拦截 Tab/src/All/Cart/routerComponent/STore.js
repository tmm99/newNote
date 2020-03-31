import React, { Component } from 'react'

export default class STore extends Component {
    state={
        str: JSON.parse(localStorage.getItem("allData"))
    }
    render() {
let {str}=this.state
console.log(str)
        return (
            <div>
                {
                    str && str.map((item,index)=><p key={index}>

                        <p>{item.tit}</p>
                        <p>{item.cont}</p>
                        <button>-</button>
                        <span>{item.num}</span>
                        <button>+</button>
                        <p>￥：{item.price}</p>
                    </p>)
                }
            </div>
        )
    }

  
}
