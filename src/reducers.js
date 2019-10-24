import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

//initial state for search
const initialStateSearch = {
    searchField: ''
}

//initial state for request robots
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

//reducer
//Initial value initialState and empty object
//Parameters state and action
//pure function must always return something
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            //Return First Parameter a new object. Second Parameter with the current State. Third Paramter Only Change this part of the state.
             return Object.assign({},state,{searchField: action.payload});
        default:
            return state;
    }
}

export const requestRobots = (state=initialStateRobots,action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state, {error: action.payload,isPending:false});
        default:
            return state;    
    }
}