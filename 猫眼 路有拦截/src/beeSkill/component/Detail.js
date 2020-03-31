import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'
import Item from './Item'
export default class Detail extends Component {
    state={
        datas:[]
    }
    render() {
    let {datas}=this.state
        return (
            <div className="detail">
              {
                  datas&&datas.map((item,index)=><Item key={index} item={item} ></Item>)
              }
            
            </div>
        )
    }
    componentDidMount(){
        axios.get('/list').then((res)=>{
            // console.log(res.data.list)
            this.setState({datas:res.data.list})
        })
    }
}
