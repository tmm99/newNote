import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'
// import { connect } from 'react-redux'

// import store from '../store/store'
import Item from '../component/Item'
export default class Main extends Component {

    state = {
        getData: []
    }
    render() {
        let { getData } = this.state
        // let { getDl}=this.props
        // console.log(getDl)
        return (
            <div>
                {
                    getData && getData.map((item,index)=><Item item={item} key={index}></Item>)
                }
            </div>
        )
    }
    componentDidMount() {

        axios.get('/list').then((res) => {
            // console.log(res.data)
            this.setState({ getData: res.data })

        })
    }
    // handleClick(index){
    //     this.props.handleDl(index)
    // }
}

//  connect((state) => {
//     return {
//         getDl: state.dataD
//     }
// }, (dispath) => {
//     return {
//          handleDl(index){
//                 dispath({type:"clickDl",indDl:index})
//                 this.props.history.push('/detail')
//           }
//     }
// })(Main)
