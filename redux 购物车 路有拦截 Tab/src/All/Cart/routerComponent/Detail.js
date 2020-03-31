import React, { Component } from 'react'
import detailData from '../data/data.json'
export default class Detail extends Component {
    state={
        detailId:""
    }
    render() {
        let { detailId, detailData}=this.state
        console.log(this.props)
        console.log(detailId)
     
        return (
            <div className="detail">
                <p>{detailId.tit}</p>
                <p>{detailId.cont}</p>
            </div>
        )
    }
    componentDidMount(){
         let {match:{params:{id}}}=this.props
       
        let detailMsg = detailData.find(item=>item.id==id)
        this.setState({ detailId: detailMsg})
        console.log(detailMsg)
    }
}
