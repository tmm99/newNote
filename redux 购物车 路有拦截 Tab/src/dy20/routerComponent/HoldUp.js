import React, { Component } from 'react'

const wrapWith=(Comp)=>{


 class HoldUp extends Component {
    render() {
        return (
            <Comp {...this.props}/>
        )
    }
    componentDidMount(){
        if(!localStorage.user){
            this.props.history.push("/cont")
        }
    }
}
return HoldUp
}
export default wrapWith