import React, { Component } from 'react'

import { createStore } from 'redux'

let reducer = (state = { list: [], allPrice: 0}, action) => {
    //    console.log(state.list)
    switch (action.type) {
        case "SETDATA": {  //存储json数据
            state.list = action.dataList
            // console.log(state.list)
            return { ...state, list: [...state.list], ...state.allPrice}
        }
        case "ADD": {//加

            state.list[action.addId].num++
            state.allPrice += state.list[action.addId].price  //总价
            return { ...state, list: [...state.list], ...state.allPrice }
        }
        case "LOSE": {//减
            if (state.list[action.loseId].num != 0) {
                state.list[action.loseId].num--
                state.allPrice -= state.list[action.loseId].price    //总价
                return { ...state, list: [...state.list], ...state.allPrice }
            } else {
                return { ...state, list: [...state.list], ...state.allPrice}

            }

        }
        


        default: return { ...state, list: [...state.list], ...state.allPrice}
    }
}

let store = createStore(reducer)
window.store = store
export default store