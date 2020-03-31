import React, { Component } from 'react';
import Son from './Son'
class Father extends Component {
    state={txt:''}
    setStateFn=(val)=>{
        this.setState({txt:val}) 
    }
    render() {
        return (
            <div>
                 <h1>我要接收son的msg：{this.state.txt}</h1>
                 <Son setStateFn={this.setStateFn}/>
            </div>
        );
    }
}

export default Father;