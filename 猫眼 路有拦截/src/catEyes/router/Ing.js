import React, { Component } from 'react'
import axios from 'axios'
import "../data/mock"
export default class Ing extends Component {
    state={
        datas:[]
    }
    render() {
        let {datas}=this.state
        console.log(datas)
        return (
            <div>
                {
                    datas && datas.map((item,index)=><dl key={index} className="dl">
                        <dt>
                            <img src={item.img} className="img"/>
                        </dt>
                        <dd className="dd">
                            <p className="font">{item.nm}</p>
                            <p>观众评：{item.sc}</p>
                            <p>主演：{item.star}</p>
                        </dd>
                    </dl>)
                }
            </div>
        )
    }
    componentDidMount(){
        axios.get('/list').then((res)=>{
            // console.log(res)
            this.setState({ datas: res.data.movieList})
        })
    }
}
