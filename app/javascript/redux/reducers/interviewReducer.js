import {GET_INTERVIEWS} from '../actions/types';

function interviewReducer(state = [], action) {
    switch(action.type) {
        case GET_INTERVIEWS:
            return [...action.payload];
        default:
            return state;
    }
}

export default interviewReducer;