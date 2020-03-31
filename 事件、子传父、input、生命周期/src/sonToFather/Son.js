import React, { Component } from 'react';

class Son extends Component {
    state={msg:'nice to meet you!'}
    handleClick=()=>{
        this.props.setStateFn(this.state.msg)
    }
    render() {
        return (
            <div>
                {this.state.msg}
                <button onClick={this.handleClick}>子传父</button>
            </div>
        );
    }
}

export default Son;