import React, { Component } from 'react'
import axios from 'axios'
import './mock'
import {connect} from 'react-redux'

import "./style.css"
 class Cart extends Component {
  
    render() {
        let { getList}=this.props
        console.log(getList)
        return (
            <div className="cart">
                  {
                    getList && getList.map((item,index)=><div key={index}>
                        <p>{item.title}</p>
                        <p><img src={item.img} className="img"/></p>
                        <button>-</button>
                        <span>{item.count}</span>
                        <button onClick={this.handleAdd.bind(this)}>+</button>

                    </div>)
                  }
            </div>
        )
    }
    componentDidMount(){
        this.props.setData()
    }
//加
     handleAdd(){
        console.log(11)
     }
}
export default connect((state)=>{
    return{
            getList:state.list
}},(dispatch)=>{
    return{
        setData(){
             axios.get('/list').then((res)=>{
                 dispatch({type:"stData",setList:res.data})
            // console.log(res)
        })
        }
}})(Cart)