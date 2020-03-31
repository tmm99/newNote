/*
 * @Description: In User Settings Edit{}
 * @Author: your name
 * @Date: 2019-08-17 09:53:09
 * @LastEditTime: 2019-08-17 10:33:33
 * @LastEditors: Please set LastEditors
 */
import { createStore, combineReducers} from 'redux'
import shop from './shop'
let reducer= combineReducers({
    shop
})

let store = createStore(reducer)
window.store=store
export default store