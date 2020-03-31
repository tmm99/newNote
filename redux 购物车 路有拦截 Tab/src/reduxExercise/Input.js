import React, { Component } from 'react'
import store from './Index';
export default class Input extends Component {
    state = {
        txt: ""
    }
    render() {
        let { txt } = this.state

        return (
            <div>
                <input type="text" value={txt}
                onChange={this.handleChange.bind(this)}
                 onKeyDown={this.handleDown.bind(this)} />

            </div>
        )
    }
    //改变
    handleChange(e) {
        this.setState({ txt: e.target.value })
    }
    //按下
    handleDown(e) {
        if (e.keyCode === 13) {
            store.dispatch({
                type: "add",
                txt: this.state.txt,
               
            })
          
        
          this.setState({txt:""})
        }
    }
}
