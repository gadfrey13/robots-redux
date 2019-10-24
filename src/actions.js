import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) => {
   return { 
    type: CHANGE_SEARCH_FIELD,//the action taken. This is constant thats why is capitalize
    payload: text //sent the data
   }
}

//Asyncrousnous
//Higher Order Function
//Will work without redux-thunk
//So the dispatch comes from the redux-thunk middleware
//redux-thunk looks for actions that are functions. It knows if its a function then it is asyncrounous
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            return response.json();
        }).then( data => {dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data})
        }).catch(error => ({type: REQUEST_ROBOTS_FAILED, payload: error}))
}