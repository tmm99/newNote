import React, { Component } from 'react'
import detailDa from '../data/index.json'
export default class Detail extends Component {
    state={     
        detailId:{},
        cor:false
        
    }
    render() {
        let { detailId,cor}=this.state
      
        return (
            <div>
                <span className={cor ? 'sp' : null} onClick={this.handleStore.bind(this)}>收藏</span>
                <span>{detailId.peopleCount}</span>
                <p>{detailId.title}</p>
                <p><img src={detailId.smallImgUrl} className="img"/></p>

            </div>
        ) 
    }
    componentDidMount(){
        let { match: { params: { id } } } = this.props
        let detailPro0 = detailDa.products0
        console.log(detailPro0)
        console.log(id)     
        let detailPro = detailPro0.find(item=>item.productId==id)
        this.setState({ detailId: detailPro})
  
    }
    handleStore(){
        let { detailId, cor } = this.state  
         let list = localStorage.list ? JSON.parse(detailId):[]
        // console.log(cor)
        cor=!cor
        if(cor){
            detailId.peopleCount++
            list.push(detailId)
        }else{
            detailId.peopleCount--
        }
        this.setState({cor})
     
        // localStorage.setItem("storeData", JSON.stringify(detailId))
        localStorage.list(JSON.stringify(list))

    }
}
