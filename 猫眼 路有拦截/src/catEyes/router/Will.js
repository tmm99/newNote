import React, { Component } from 'react'
import axios from 'axios'
import "../data/mock2"
export default class Will extends Component {
    state = {
        data2: [],
        ind:0
    }
    render() {
        let { data2,ind } = this.state
        console.log(ind)
        // console.log(data2)
        return (
            <div>
                {
                    data2 && data2.map((item, index) => <dl key={index} className="dl" onClick={this.handleClick.bind(this,index)}>
                        <dt>
                            <img src={item.img} className="img" />
                        </dt>
                        <dd className="dd">
                            <p className="font">{item.nm}</p>
                            <p>观众评：{item.sc}</p>
                            <p>主演：{item.star}</p>
                            <p>上映时间：{item.rt}</p>
                        </dd>
                    </dl>)
                }
            </div>
        )
    }
    componentDidMount() {
        axios.get('/lists').then((res) => {
            // console.log(res)
            this.setState({ data2: res.data.coming})
        })
    }
    handleClick(index){
        this.setState({ind:index})
        this.props.history.push('/Detail')
        // console.log(1)
    }
}

