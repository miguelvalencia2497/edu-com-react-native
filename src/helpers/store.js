// @flow
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMidleware = createSagaMiddleware();

  return {
    ...createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMidleware)),
    ),
    runSaga: sagaMidleware.run(rootSaga),
  };
};

export default configureStore;
