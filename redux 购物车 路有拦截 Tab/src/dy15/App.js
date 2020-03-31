import React, { Component } from 'react'
import axios from 'axios'
import './data/mock'
import {connect} from 'react-redux'
import './style/style.css'
 class App extends Component {
    render() {
        let {getData}=this.props
        console.log(getData)
       
        return (
            <div className="app">
              
                {
                    getData && getData.map((item,index)=><div key={index} className="box">
                      
                        <p>{item.date}</p>
                        <p>{item.name}</p>
                        <p>{item.address}</p>     
                       <button onClick={this.handlereduce.bind(this,index)}>-</button>      
                        <span>{item.num}</span>           
                        <button onClick={this.handleAdd.bind(this, index)}>+</button>           

                    </div>) 
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.msg()
    }
     handleAdd(){

     }
     handlereduce(){
         
     }
}




export default connect((state)=>{
    console.log(state)
    return{
        getData:state.list
    }
},(dispatch)=>{
    return{
        msg(){
            axios.get('/list').then((res) => {

             dispatch({type:"setData",datas:res.data})
            })
        }
    }
})(App)