import {takeLatest} from 'redux-saga/effects';
import {ACTION_TYPES} from '../redux/actionTypes';
import {getAllProducts, getProductDetailsById} from './productSaga';

export const productWatchers = [
  takeLatest(ACTION_TYPES.GET_ALL_PRODUCTS, getAllProducts),
  takeLatest(ACTION_TYPES.GET_PRODUCT_DETAILS_BY_ID, getProductDetailsById),
];
