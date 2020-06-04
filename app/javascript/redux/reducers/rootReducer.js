import { combineReducers } from 'redux'
import interviewsReducer from './interviewReducer'

const rootReducer = combineReducers({
    interviews: interviewsReducer
});

export default rootReducer;