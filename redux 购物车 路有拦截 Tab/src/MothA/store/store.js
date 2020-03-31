import React, { Component } from 'react'
import {createStore} from 'redux'
let reducer=(state={lists:[]},action)=>{

    switch(action.type){
        case "storeData":
                return {...state,getData:[...state.lists]}
        default: return { ...state, getData: [...state.lists] }
    }
}
let store=createStore(reducer)
window.store=store
export default store