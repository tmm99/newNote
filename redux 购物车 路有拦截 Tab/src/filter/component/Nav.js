import React, { Component } from 'react'
// import store from '../store/store'
import { connect } from 'react-redux'
 class Nav extends Component {
 
    state={
        data:["one","two","three","four","five"],
        ind:0
    }
    render() {
        let {data,ind}=this.state
        // let {list}=this.props
        return (
            <div className="nav">
                {
                    data.map((item,index)=><p key={index}
                     onClick={this.handleClick.bind(this,index)}
                      className={ind===index?"active":""}>{item}</p>)
                }
            </div>
        )
    }

     handleClick(index){
         let { data,ind } = this.state
         this.props.handle(index)
         this.setState({ ind: index })
         console.log(data[index])
     }
    // handleClick(index){
    //     let { data} = this.state
    //     store.dispatch({
    //         type:"add",
    //         text:data[index],
    //         addId:index
    //     })
        
    //     this.setState({ind:index})
    //     console.log(data[index])
    // }
}



export default connect((state) => {
    return {
        list: state.list
    }
}, (dispatch) => {
    return {
        handle(index) {
            let { data } = this.state

            dispatch({ type: "add",  text: data[index], addId: index })  }
                 
    }
    })(Nav)           
               
           
           
           

          
   
