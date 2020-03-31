import React, { Component } from 'react'

import { createStore } from 'redux'

let reducer = (state = { list:[] }, action) => {
   console.log(state)
    switch (action.type) {
        case "clickDl":
            {
              state.list.push(action.indDl)
             return {...state,dataD:[...state.list]}
            }

            case "Add":{
            state.list.price++
            return { ...state, dataD: [...state.list] }
            }
        default: return state
    }
}
let store = createStore(reducer)
window.store = store
export default store

