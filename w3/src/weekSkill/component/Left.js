import React, { Component } from 'react'
import axios from 'axios'
import '../data/mock'
import Item from '../component/Item'
export default class Left extends Component {
    //左边数据
    state = {
        leftD: [],
      ind:0
    }
    render() {
        let { leftD,ind } = this.state
        console.log(leftD)
        return (
            <div className="left">
               {
                    leftD && leftD.map((item,index)=><Item item={item} key={index} />)
               }
            </div>
        )
    }
    componentDidMount() {
        axios.get('/list').then((res) => {
            this.setState({ leftD: res.data })
        })
    }
}
