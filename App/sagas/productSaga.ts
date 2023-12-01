import {call, put} from 'redux-saga/effects';
import {IAllProductsResponse, NetworkResponse} from '../common/networkTypes';
import {
  setFetchingAllProductsErrorActionCreator,
  setFetchingAllProductsSuccessActionCreator,
  setFetchingProductsActionCreator,
} from '../redux/actionCreator';
import {productService} from '../service/productService';

function* handleResponse<T, P>(
  response: NetworkResponse<T, P>,
  successAction: (data: T) => void,
  errorAction: (data: P | null) => void,
) {
  if (response.ok) {
    if (response.data) {
      yield put(successAction(response.data) as any);
    }
  } else {
    yield put(errorAction(response?.data ?? null) as any);
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

export {getAllProducts};
