import {IAllProductsResponse, IProductDetail} from '../common/networkTypes';
import {ACTION_TYPES} from './actionTypes';
import {ICommonState, ProductActionTypes} from './types';

const commonState: ICommonState = {
  products: {
    data: [],
  },
  currentProductDetail: {},
};

const setFetchingAllProducts = (state: ICommonState) => {
  return {
    ...state,
    isFetchingAllProducts: true,
  };
};

const setFetchingAllProductsSuccess = (
  state: ICommonState,
  payload: IAllProductsResponse,
) => {
  return {
    ...state,
    products: {data: payload.products},
    isFetchingAllProducts: false,
  };
};

const setFetchingAllProductsError = (state: ICommonState, payload: any) => {
  return {
    ...state,
    products: {
      error: payload,
    },
    isFetchingAllProducts: false,
  };
};

const setFetchingProductDetailsById = (state: ICommonState) => {
  return {
    ...state,
    isFetchingProductDetailsById: true,
  };
};

const setFetchingProductDetailsByIdSuccess = (
  state: ICommonState,
  payload: IProductDetail,
) => {
  return {
    ...state,
    currentProductDetail: payload,
    isFetchingProductDetailsById: false,
  };
};

const setFetchingProductDetailsByIdError = (state: ICommonState) => {
  return {
    ...state,
    currentProductDetail: {},
    isFetchingProductDetailsById: false,
  };
};

export const productReducer = (
  initialState = commonState,
  action: ProductActionTypes,
) => {
  const {type, payload} = action;
  switch (type) {
    // get all products
    case ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS:
      return setFetchingAllProducts(initialState);
    case ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS_SUCCESS:
      return setFetchingAllProductsSuccess(initialState, payload);
    case ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS_ERROR:
      return setFetchingAllProductsError(initialState, payload);

    // get product details by id
    case ACTION_TYPES.SET_FETCHING_PRODUCT_DETAILS_BY_ID:
      return setFetchingProductDetailsById(initialState);
    case ACTION_TYPES.SET_FETCHING_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return setFetchingProductDetailsByIdSuccess(initialState, payload);
    case ACTION_TYPES.SET_FETCHING_PRODUCT_DETAILS_BY_ID_ERROR:
      return setFetchingProductDetailsByIdError(initialState);
    default:
      return initialState;
  }
};
