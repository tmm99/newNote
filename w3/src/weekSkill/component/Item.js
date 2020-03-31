import React, { Component } from 'react'

export default class Item extends Component {
    state={
      ind:0
    }
    render() {
            let {item}=this.props
            // console.log(item.id)
            let {ind}=this.state;
        return (
            <div className="leftp">
                <p onClick={this.handleProps.bind(this, item.id)} className={ind == item.id ?"active":null}>{item.name}</p>
            </div>
        )
    }
    handleProps(index){
        // console.log(index)

        this.setState({ind:index})
    } 
   
}
