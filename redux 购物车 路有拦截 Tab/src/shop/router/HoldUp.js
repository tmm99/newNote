import React, { Component } from 'react'
// import My from '../routerComponent/My'
const WrapWith = (Login)=>{
    class HoldUp extends Component {
        render() {
            return (
               <Login {...this.props}/>
            )
        }
        componentDidMount(){
            if(!localStorage.user){
                this.props.history.push('/login')
            }
        }
    }
    return HoldUp
}


export default WrapWith