import React, { Component } from 'react';

class SetInterval extends Component {
    state={date:new Date()}
    componentDidMount(){
      this.Timer= setInterval(()=>{
            // 重新设置state里的date
        this.setState({date:new Date()})
        },1000)
    }
    //组件销毁
    componentWillUnmount(){
        clearInterval(this.Timer)
    }
    render() {
        let {date}=this.state
        return (
            <div>
                {date.toLocaleTimeString()}
            </div>
        );
    }
}

export default SetInterval;