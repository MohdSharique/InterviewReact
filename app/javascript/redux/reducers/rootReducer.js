import { combineReducers } from 'redux'
import interviewReducer from './interviewReducer'
import interviewsReducer from './interviewsReducer'
import participantReducer from './participantReducer'
import participantsReducer from './participantsReducer'

const rootReducer = combineReducers({
    interview: interviewReducer,
    interviews: interviewsReducer,
    participant: participantReducer,
    participants: participantsReducer
});

export default rootReducer;