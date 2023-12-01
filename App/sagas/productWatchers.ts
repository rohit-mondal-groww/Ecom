import {takeLatest} from 'redux-saga/effects';
import {ACTION_TYPES} from '../redux/actionTypes';
import {getAllProducts} from './productSaga';

export const productWatchers = [
  takeLatest(ACTION_TYPES.GET_ALL_PRODUCTS, getAllProducts),
];
