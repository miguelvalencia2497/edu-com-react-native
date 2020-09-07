import {combineReducers} from 'redux';

// Reducers
import lesson from './lessonReducer';

const rootReducer = combineReducers({
  lesson,
});

export default rootReducer;
