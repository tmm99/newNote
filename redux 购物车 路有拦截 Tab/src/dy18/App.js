import React, { Component } from 'react'
import Left from './component/Left'
import Right from './component/Right'
import "./style/style.css"
import axios from 'axios'
import './data/mock'
export default class App extends Component {
    state={
        dataMsg:[],
        ind:0
    }
    render() {
        let {dataMsg,ind}=this.state
        // console.log(dataMsg)
      return (
            <div className="app">
              <Left dataMsg={dataMsg} ind={ind} handleClick={this.handleClick.bind(this)}/>
              <Right dataMsg={dataMsg.length&&dataMsg[ind]} />
            </div>
        )
    }
    componentDidMount(){
        axios.get('/list').then((res)=>{
            this.setState({dataMsg:res.data})
        })
    }
    handleClick(ind){
        this.setState({ind:ind})
    }
}
