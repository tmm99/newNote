import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


 class Head extends Component {
    render() {
        return (
            
            <div className="head">
                <span>地址</span>
                <input type="text"/>
               <span onClick={this.handleClick.bind(this)}>收藏</span>
                <span>优惠券</span>
            </div>
          
        )
    }
    handleClick(){
        // console.log(this.props)
        this.props.history.push('/store')
    }
}
// 
export default withRouter(Head)