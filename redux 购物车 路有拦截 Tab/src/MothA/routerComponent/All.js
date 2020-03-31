import React, { Component } from 'react'
import axios from 'axios'
import '../data/mock'
import {connect} from 'react-redux'
export default class All extends Component {
    state={
        mockData:""
    }
    render() {
        // let {lists}=this.props      
        // console.log(lists)
        let { mockData}=this.state
        // console.log(mockData)
        return (
            <div>
              <div className="dataDl">
                    {
                        mockData && mockData.map((item, index) => <dl key={index} className="dl">
                            <dt>{item.productTypeName}</dt>
                            <dd>{item.title}</dd>
                            <dd><img src={item.smallImgUrl} className="img" onClick={this.handleClick.bind(this, item.productId)}/></dd>
                         
                        </dl>)
                    }
              </div>
            </div>
        )
    }
    componentDidMount(){
        // this.props.getData()
        axios.get('/list').then((res) => {
//                   dispatch({ type: "storeData", datas: res.data.products0})
            // console.log(res.data.products0)
            this.setState({ mockData: res.data.products0})
    }
        )}

    handleClick(id){
        this.props.history.push('/detail/'+id)
    }
}

// export default connect((state)=>{
//     console.log(state)

//     return {
//         lists:state.getData
//     }
// }, (dispatch)=>{
//     return{
//         getData(){
//               axios.get('/list').then((res)=>{
//                   dispatch({ type: "storeData", datas: res.data.products0})
//             // console.log(res.data.products0)
//         })
//         }
//     }
// })(All)