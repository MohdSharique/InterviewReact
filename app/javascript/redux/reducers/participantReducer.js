import {ADD_PARTICIPANT, EDIT_PARTICIPANT} from '../actions/types'

export const initialState = {
    email: '',
    role: ''
}
function participantsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PARTICIPANT:
            return [...action.payload];
        case EDIT_PARTICIPANT:
            return {...state, [action.payload.key]: action.payload.value}
        default:
            return state;
    }
}

export default participantsReducer;