import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
// import { connect } from 'react-redux'
 class Item extends Component {
   
    render() {
        let {item}=this.props
        console.log(item)
      
        return (
            <div>
                <dl className="dl">
                    <dt>{item.title}</dt>
                    <dd ><img src={item.img} className="img"  onClick={this.handleClick.bind(null,item.id)}/>
                        {/* <p>{item.id}</p> */}
                        <div className="carButton">
                    <button>-</button>
                            <span>{item.count}</span>   
                    <button onClick={this.handleAdd.bind(this)}>+</button>
                    <p>{item.price}</p>
                </div>
                    </dd>
                </dl>
            </div>
        )
    }
    handleClick=(id)=>{

        this.props.history.push('/detail/'+id)
    }
     handleAdd(){
        
         let { item } = this.props

         console.log(item.count++)
     }
}
export default withRouter(Item)
