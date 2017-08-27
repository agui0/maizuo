import {createStore} from 'redux'

// console.log(createStore);

let reducer = function(state,action){
    // console.log(state)
    // console.log(action)
    if(state==null){
        state = {
            address:'深圳',           
        }
    }
    if(action.type == 'changeCity'){
        state.address = action.val
    }
    
    return state;
}




export default createStore(reducer);
