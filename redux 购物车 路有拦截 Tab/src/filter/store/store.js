import { createStore, combineReducers } from 'redux'

let reducer = (state = { list: [{ datas: "数据" }] }, action) => {
        let newState={...state,list:[...state.list]}
        switch(action.type){
            case "add":
                newState.list.push({datas:action.text})
                return newState
                default:return newState
        }
    // return {
    //     list: list(state,action)
    // }
}

// let list = (state=[], action) => {
//     switch (action.type) {
//         case "add":
//                 newState.list.push({datas:action.text})
//                 return newState
//                 default:return newState
//     }
// }

// let reducer = combineReducers({list})



let store = createStore(reducer)
export default store