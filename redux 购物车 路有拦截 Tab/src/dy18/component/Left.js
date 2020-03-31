import React, { Component } from 'react'


export default class Left extends Component {
   
    render() {
        let {dataMsg,ind}=this.props
        // console.log(dataMsg)
        return (
            <div className="left">
                {
                    dataMsg && dataMsg.map((item,index)=><div key={index} className={ind===index?"active":null} 
                    onClick={this.handleClick.bind(this,index)}>{item.title}</div>)
                }
            </div>
        )
    }
    handleClick(index){
        let {handleClick}=this.props
        handleClick(index)
    }
  
}
