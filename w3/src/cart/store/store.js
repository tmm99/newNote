import {createStore} from 'redux'

const reducer=(state={carData:[],allPrice:0,detailStore:[]},action)=>{
 
    //carData是默认的  allPrice是默认的总价 detailStore是

    switch(action.type){
        case "storeData":{
            //    console.log(action)
               state.carData = action.list;
               
            return { ...state, data: [...state.carData], allPrice: state.allPrice}
        }
        case "loseIndex":{
            // console.log(action,22)
            // console.log(state.carData)
            if(state.carData[action.ind].num > 0){   
                state.carData[action.ind].num--
                // state.carData[action.].allPrice 
                state.allPrice-=state.carData[action.ind].price
                return { ...state, data: [...state.carData] }
                
            }else{
                return { ...state, data: [...state.carData] }
              
            }
            
            // return { ...state, data: [...state.carData] }
        }
        case 'addIndex':{
            // console.log(action,11)
                state.carData[action.addInd].num++
            state.allPrice += state.carData[action.addInd].price;
                return {...state,data:[...state.carData]}
           
        }
        case 'detailIndex':{
            state.detailStore = [];//给它 先清空一下 
            state.detailStore.push(state.carData[action.detailInd]);
            
            return { ...state, detailNewStore: [ ...state.detailStore]}
        }
    



        default:return {...state}
    }
    return { ...state, allPrice: state.allPrice , detile : [...state.detailStore]}

}

const store=createStore(reducer)
export default store 