import React, { Component } from 'react';

class Form extends Component {
    state={name:'',checked:false}
    setName=(e)=>{
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    setChecked=(e)=>{
        console.log(e.target.checked)
        this.setState({checked:e.target.checked})
    }
    render() {
        return (
            <div>
                <span>{this.state.checked?'true':'false'}</span>
               <input type='checkbox' checked={this.state.checked} onChange={this.setChecked}/>
               <input type='text' defaultValue={this.state.name} onChange={this.setName} ></input>
               <input type='submit' onClick={()=>{console.log(this.state.name)}}/>
            </div>
        );
    }
}

export default Form;