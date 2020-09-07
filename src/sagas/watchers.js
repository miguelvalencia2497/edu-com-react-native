import {takeLatest} from 'redux-saga/effects';

// Constants
import {LESSON} from '../constants';

// Sagas
import {getLessonsSaga} from './lessonSagas';

export function* watchLesson() {
  yield takeLatest(LESSON.GET_LESSONS_REQUEST, getLessonsSaga);
}