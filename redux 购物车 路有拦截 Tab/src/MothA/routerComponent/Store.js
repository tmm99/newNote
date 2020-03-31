import React, { Component } from 'react'

export default class Store extends Component {
    state={
        getStores: JSON.parse(localStorage.getItem("storeData"))
    }
    render() {
        let {getStores}=this.state 
         console.log(getStores)
        return (
            <div className="store">
               
          
                        <p>已收藏：{getStores.productTypeName}</p>
                        <p><img src={getStores.smallImgUrl} className="img" /></p>
             
               
            </div>
        )
    }
    componentDidMount(){  
        let {getStores}=this.state
        
   
      
    }
}
