import React, { Component } from 'react'
import {createStore} from 'redux'
let reducer=(state={list:[],count:0},action)=>{
 
    switch(action.type){
        case "setData":{
            state.list=action.datas
            return  {...state,list:[...state.list],...state.count}
        }
        default: return { ...state, list: [...state.list], ...state.count}
    }
}
let store=createStore(reducer)
window.store=store
export default store