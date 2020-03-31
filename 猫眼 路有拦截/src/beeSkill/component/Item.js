import React, { Component } from 'react'
import {withRouter,NavLink} from 'react-router-dom'
 class Item extends Component {
    render() {
        let {item}=this.props
        console.log(item.id)
        // console.log(this.props)
        return (
            <div>
                <NavLink to="/newdetail/:id">

                     <p onClick={this.handleClick.bind(this)}>{item.name}</p>
                     <p><img src={item.img} className="img"/></p>
                </NavLink>
               
               
            </div>
        )
    }
    handleClick(){
        // console.log(11)
        // this.props.history.push()
    }
}
export default withRouter(Item)