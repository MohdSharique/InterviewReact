import {GET_INTERVIEW, EDIT_INTERVIEW, CREATE_INTERVIEW, UPDATE_INTERVIEW} from '../actions/types';

export const initialState = {
    title: '',
    start_time: '',
    end_time: '',
    participants: []
}
function interviewReducer(state = initialState, action) {
    switch(action.type) {
        case GET_INTERVIEW:
            const interview = action.payload.interview;
            const participants = action.payload.participants; 
            return {
                title: interview.title,
                start_time: interview.start_time,
                end_time: interview.end_time,
                participants: participants
            };
        case CREATE_INTERVIEW:
            return {...state, ...action.payload}
        case EDIT_INTERVIEW:
            return {...state, [action.payload.key]: action.payload.value}
        case UPDATE_INTERVIEW:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default interviewReducer;