import {createStore} from 'redux'
let reducer=(state={list:[]},action)=>{
   let newState={...state,list:[...state.list]}
    switch(action.type){
        case "getData":
            newState.list.push( action.GetData)
        return newState
     default:return newState
    }
    
   
}
let store=createStore(reducer)
export default store
