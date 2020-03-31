import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../store/store'
import axios from 'axios'
import '../data/mock'
// import store from '../store/store';
 class Top extends Component {
    // constructor(props){
    //     super(props)
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    
    render() {
        let {list}=this.props
        console.log(list)
        // let {nav}=this.state 
        // console.log(nav)
        return (
            <div className="top">
              {
                    list && list.map((item,index)=><p key={index}>{item.name}</p>)
              }
            </div>
        )
    }

    componentDidMount(){
        // axios.get('/chec').then((res)=>{
        //     this.setState({nav:res.data.tit})
           
        // })

        this.props.getList()

    }





}
export default connect((state)=>{
    return{
            list:state.list
    }
},(dispatch)=>{
    return {
        
        getList(){
            axios.get('/chec').then((res) => {
                dispatch({type:"getData",GetData:res.data})
                // this.setState({ nav: res.data.tit })
                console.log(res.data)
            })
        }
    }
})(Top)