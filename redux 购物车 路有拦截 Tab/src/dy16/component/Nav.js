import React, { Component } from 'react'

export default class Nav extends Component {
    state={
        tit:["分类","全部","排序"],
        flag:false
    }
    render() {
        let { tit, flag}=this.state
        return (
            <div className="nav" >
              {
                  tit.map((item,index)=><p key={index} onClick={(flag)=>{
                      return flag?111:222
                  }}>{item}</p>)
              }
            </div>
        )
    }
    // enter(){
    //     let {flag}=this.state
    //  flag?111:222
    // //  <p className="p2">111</p>:<p>222</p>
    // }
}
