import React, { Component } from 'react'
import Fa from './Fa'
export default class Com extends Component {
    state={
        value:"",
        btnValue:'',
        btnDa:[]
    }
    render() {
        let { value, btnValue, btnDa}=this.state
        console.log(btnDa)
        return (
            <div className="comHeadtxt">
                <input type="text" value={value} onChange={this.handleChange.bind(this)}/>
               <button onClick={this.handleClick.bind(this)}>评论</button>
                <p>{btnValue}</p>
                    {
                    btnDa.length && btnDa.map((item, index) => <Fa key={index} item={item}/>)   
                    }
               
            </div>
        )
    }
    handleChange(e){
        this.setState({value:e.target.value})
       
        // this.setState({value:""})
    }
    handleClick(){
        let { value, btnValue, btnDa } = this.state
        // console.log(value)
        this.setState({btnValue: value})
        btnDa.push(btnValue)
        this.setState({ value:""})
        // this.props.history.push('/fa')
    }

}
