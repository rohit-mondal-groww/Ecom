import {all} from 'redux-saga/effects';
import {productWatchers} from './productWatchers';

function* rootSaga() {
  yield all([...productWatchers]);
}

export default rootSaga;
