import {IAllProducts} from '../common/networkTypes';
import {ACTION_TYPES} from './actionTypes';

export const getAllProductsActionCreator = () => {
  return {
    type: ACTION_TYPES.GET_ALL_PRODUCTS,
  };
};

export const setFetchingProductsActionCreator = (payload: {
  fetching: boolean;
}) => {
  return {
    type: ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS,
    payload,
  };
};

export const setFetchingAllProductsSuccessActionCreator = (
  payload: IAllProducts,
) => {
  return {
    type: ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS_SUCCESS,
    payload,
  };
};

export const setFetchingAllProductsErrorActionCreator = (error: any) => {
  return {
    type: ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS_ERROR,
    error,
  };
};

export const getProductDetailsActionCreator = (payload: {
  fetching: boolean;
}) => {
  return {
    type: ACTION_TYPES.GET_PRODUCT_DETAILS,
    payload,
  };
};
