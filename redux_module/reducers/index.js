import { combineReducers } from 'redux';
 
import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED } from "../actions/" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true };
 
const dataReducer = (state = dataState, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case GET_ITEMS:
            state = Object.assign({}, state, {loading:true });
            return state;
        case GET_ITEMS_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state
        case GET_ITEMS_FAILED:
            state = Object.assign({}, state, { loading:false,  error: 'Error while fetching items' });
            return state
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;