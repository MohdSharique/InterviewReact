import {GET_INTERVIEWS} from '../actions/types';

function interviewsReducer(state = [], action) {
    switch(action.type) {
        case GET_INTERVIEWS:
            return [...action.payload];
        default:
            return state;
    }
}

export default interviewsReducer;