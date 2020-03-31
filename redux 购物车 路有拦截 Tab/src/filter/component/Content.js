import React, { Component } from 'react'
import store from '../store/store'
import {connect} from 'react-redux'
 class Content extends Component {
    constructor(props) {
        super(props)
        store.subscribe(()=>{
          this.setState({})         
        })      
    }

    render() {
      // let {list}=store.getState()
      let { list } = this.props
        console.log(list)
        return (
            <div className="cont">
                <div className="das">
               {
                    list.map((item, index) => <p key={index} className="contP" >{item.datas}<span>X</span></p>)
               }
              </div>
            </div>
        )
    }
}
export default connect((state)=>{
  return{
    list:state.list
}
},(dispatch)=>{return{}})(Content)