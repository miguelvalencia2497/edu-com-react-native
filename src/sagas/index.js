import {fork} from 'redux-saga/effects';

import {watchLesson} from './watchers';

export default function* rootSaga() {
  yield fork(watchLesson);
}
