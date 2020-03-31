import React, { Component } from 'react'
import Axios from 'axios';
import '../data/mock'
import {withRouter} from 'react-router-dom'
class Right extends Component {
    state={
        rightData:[]
    }
    render() {
        let { rightData } = this.state
        console.log(rightData)
        return (
            <div className="right">
                {
                    rightData && rightData.map((item, index) => <dl key={index} className="dl" onClick={this.handDetail.bind(this,item.id)} >
                        <dt className="dl">{item.cont}</dt>
                        <dd></dd>
                    </dl>)
                }
            </div>
        )
    }
    componentDidMount(){
        Axios.get('/list').then((res)=>{
            this.setState({ rightData: res.data })

        })
    }
    handDetail(id,e){
        e.stopPropagation();
        
        this.props.history.push('/detail/'+id)
    }
}
export default withRouter(Right)