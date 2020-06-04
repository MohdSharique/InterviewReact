import {GET_PARTICIPANTS} from '../actions/types'

function participantsReducer(state = [], action) {
    switch(action.type) {
        case GET_PARTICIPANTS:
            return [...action.payload];
        default:
            return state;
    }
}

export default participantsReducer;