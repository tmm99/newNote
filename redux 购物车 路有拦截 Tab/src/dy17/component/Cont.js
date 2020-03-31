import React, { Component } from 'react'
import axios from 'axios'
import '../data/mock'
import Item from './Item'
export default class Cont extends Component {
    state = {
        datas: []
    }
    render() {
        let { datas } = this.state
        console.log(datas)
        return (
            <div className="cont">
                <div className="navData">
                    <span>序号</span>
                    <span>日期</span>
                    <span>名称</span>
                    <span>ID</span>
                    <span>系数</span>
                    <span>资金</span>
                    <span>利润池</span>
                    <span>操作</span>

                </div>
                {
                    datas && datas.map((item, index) => <Item item={item} key={index} />)
                }
            </div>
        )
    }
    componentDidMount() {
        axios.get('/list').then((res) => {
            this.setState({ datas: res.data })
        })
    }
}
