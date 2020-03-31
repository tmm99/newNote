import { createStore } from 'redux'

let reducer=(state={list:[{text:"哈喽",flag:true}]},action)=>{
    let newState={...state,list:[...state.list]}
    switch(action.type){
        case "add":newState.list.push({text:action.txt,flag:true})
        return newState
        case "changeIpt":
            newState.list.map(item=>{
                item.flag=true
            })
            newState.list[action.id].flag=false
        return newState
        default:return newState
        case "setIpt": newState.list[action.idCont].flag=true
        newState.list[action.idCont].text=action.text
        return newState
        case "del": newState.list.splice(action.delId,1)
        return newState
    }
}
let store=createStore(reducer)
window.store=store



export default store