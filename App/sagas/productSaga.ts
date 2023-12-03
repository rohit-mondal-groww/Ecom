import {call, put} from 'redux-saga/effects';
import {IAllProductsResponse, NetworkResponse} from '../common/networkTypes';
import {
  setFetchingAllProductsErrorActionCreator,
  setFetchingAllProductsSuccessActionCreator,
  setFetchingProductDetailsByIdActionCreator,
  setFetchingProductDetailsByIdErrorActionCreator,
  setFetchingProductDetailsByIdSuccessActionCreator,
  setFetchingProductsActionCreator,
} from '../redux/actionCreator';
import {GetProductDetailsByIdActionType} from '../redux/types';
import {productService} from '../service/productService';

function* handleResponse<T, P>(
  response: NetworkResponse<T, P>,
  successAction: (data: T) => void,
  errorAction: (data: P | null) => void,
) {
  if (Object.keys(response).length > 0) {
    yield put(successAction(response) as any);
  } else {
    yield put(errorAction(response ?? null) as any);
  }
}

function* getAllProducts() {
  yield put(setFetchingProductsActionCreator({fetching: true}));
  const response: NetworkResponse<IAllProductsResponse, {}> = yield call(
    productService.getAllProductsApi,
  );
  yield call<
    NetworkResponse<IAllProductsResponse, {}>,
    (data: IAllProductsResponse) => void,
    (data: {} | null) => void
  >(
    handleResponse,
    response,
    setFetchingAllProductsSuccessActionCreator,
    setFetchingAllProductsErrorActionCreator,
  );
}

function* getProductDetailsById(action: GetProductDetailsByIdActionType) {
  const {
    payload
  } = action;
  yield put(setFetchingProductDetailsByIdActionCreator({fetching: true}));
  const response: NetworkResponse<IAllProductsResponse, {}> = yield call(
    productService.getProductDetailsApi,
    payload,
  );
  yield call<
    NetworkResponse<IAllProductsResponse, {}>,
    (data: IAllProductsResponse) => void,
    (data: {} | null) => void
  >(
    handleResponse,
    response,
    setFetchingProductDetailsByIdSuccessActionCreator,
    setFetchingProductDetailsByIdErrorActionCreator,
  );
}

export {getAllProducts, getProductDetailsById};
