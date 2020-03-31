import React, { Component } from 'react'

const withWrapLogin=(Com)=>{
 class HoldUp extends Component {
    render() {
        return (
             <Com/>
    
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
export default withWrapLogin