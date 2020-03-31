import React, { Component } from 'react'

export default class Right extends Component {
   
    render() {
        let {dataMsg}=this.props
        console.log(dataMsg)
       
        return (
            <>
            <div className="right">
                    {<p>{dataMsg.cont}</p>}

                    
            </div>
            </>
        )
    }
    
}
