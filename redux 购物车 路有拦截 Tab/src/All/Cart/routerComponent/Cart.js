import React, { Component } from 'react'
import detailData from '../data/data.json'
export default class Cart extends Component {
    state={
        id:0
    }
    render() {
        let {id}=this.state
        console.log(id)
        // console.log(detailData)

        return (
            <div className="cart">
                <div className="cartHead">
                    {
                        detailData && detailData.map((item, index) => <p key={index} onClick={this.handleClick.bind(this,index)}>{item.tit}</p>)
                    }
                </div>
                <p>{detailData[id].tit}</p>
               
            </div>
        )
    }
    handleClick(id){
     this.setState({id:id})
       
    }
}
