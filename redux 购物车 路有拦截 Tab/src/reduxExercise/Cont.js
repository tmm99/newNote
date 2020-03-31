import React, { Component } from 'react'
import store from './Index';
export default class Cont extends Component {
    constructor(props) {
        super(props)
        store.subscribe(() => {
            this.setState({})
        })
     
    }
    //  state={
    //       isOk:false
    //   }
    render() {
        let { list } = store.getState()
        return (
            <>
                {
                    list.map((item,index)=>{
                        return (
                            item.flag?
                            <p key={index} onClick={this.handleChange.bind(this,index)}>{item.text}<span onClick={this.handleDel.bind(this,index)}>X</span></p>:
                            <p key={index}><input defaultValue={item.text} onKeyDown={this.handleContIpt.bind(this,index)}/></p>
                        )
                    })
                }

               
            </>
        )
    }
    handleChange(index){
        // let {isOk}=this.state
        // if(!isOk){
            store.dispatch({
                type:"changeIpt",
                id:index
            })
            // this.setState({isOk:true})
        // }
    }
    handleDel(index,e){
        e.stopPropagation();
// console.log(1)
        store.dispatch({
            type:"del",
            delId:index
        })
    }
    handleContIpt(index,e){
        if(e.keyCode==13){
            store.dispatch({
                type:"setIpt",
                idCont:index,
                text:e.target.value
            })
            // this.setState({isOk:false})
        }
    }

}
