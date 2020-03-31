import React, { Component } from 'react'
import listData from "../data/list.json"

export default class Detail extends Component {
    state = {
        detailIdd: {}
    }
    render() {
        let { match: { params: { id } } } = this.props
        let { detailIdd}=this.state
        console.log(detailIdd)
        // console.log(id)    // console.log(this.props)    
        return (
            <div>
                <p>{detailIdd.title}</p>
                <p><img src={detailIdd.img} className="img"/></p>
              
               
            </div>
        )
    }
    componentDidMount() {
        let { match: { params: { id } } } = this.props
        // console.log(listData.find((item) => item.id == id))
        let d = listData.find((item) => item.id == id)
        this.setState({ detailIdd: d })
    }
  
}
