import React, { Component } from 'react'

import {createStore} from 'redux'

let reducer=(state={list:[]},action)=>{
    switch(action.type){
        case "stData":{
            state.list = action.setList
            return {...state,list:[...state.list]}
        }
        default: return { ...state, list: [...state.list] }
    }    
}
    

    let store=createStore(reducer)
    window.store=store
    export default store
    
