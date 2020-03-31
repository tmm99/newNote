import React, { Component } from 'react'
import {connect} from "react-redux"
 class Detail extends Component {
    render() {
        // console.log(this.props.detailData)
        let { detailData}=this.props

        return (
            <div>
              {
                    detailData && detailData.map((item, index) =>

                        <div className="cart" key={index}>
                            <dl>
                                <dd>{item.produce}</dd>
                                <dt><img src={item.img}  /></dt>
                                <dt>{item.detailMsg}</dt>
                                <dt>{item.price}</dt>

                                <p>
                                    <button className="lose" >-</button>
                                    <span className="num">{item.num}</span>
                                    <button className="add" >+</button>
                                </p>
                            </dl>

                        </div>
                    )
              }
 
            </div>
        )
    }
}


export default connect((state)=>{
    return {
        detailData: state.detailNewStore
    }
})(Detail)