import {LESSON} from '../constants';

export default (state = {}, action) => {
  const data = action.data;
  switch (action.type) {
    case LESSON.GET_LESSONS_SUCCESS:
      return {...state, lessons: data};
    case LESSON.GET_LESSONS_ERROR:
      return {...state, lessonsError: data};
    default:
      return state;
  }
};
