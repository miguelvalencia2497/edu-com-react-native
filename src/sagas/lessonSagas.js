import {put, call} from 'redux-saga/effects';
import {LESSON} from '../constants';
import {getLessonsService} from '../services/lessonServices';

export function* getLessonsSaga() {
  try {
    const response = yield call(getLessonsService);
    if (response.status >= 200 && response.status < 300) {
      yield put({type: LESSON.GET_LESSONS_SUCCESS, data: response.data});
    } else {
      throw response;
    }
  } catch (error) {
    yield put({type: LESSON.GET_LESSONS_ERROR, data: error});
  }
}
