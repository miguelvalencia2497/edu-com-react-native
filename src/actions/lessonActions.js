// @flow strict-local
import {LESSON} from '../constants';

export const getLessonsAction = () => {
  return {
    type: LESSON.GET_LESSONS_REQUEST,
  };
};
