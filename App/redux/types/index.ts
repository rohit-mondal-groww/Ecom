import {IAllProductsResponse, IProductDetail} from '../../common/networkTypes';
import {ACTION_TYPES} from '../actionTypes';

export interface IAction<T, P = null> {
  type: T;
  payload: P;
}

export type GetAllProductsActionType = IAction<
  typeof ACTION_TYPES.GET_ALL_PRODUCTS
>;

export type GetAllProductsSuccessActionType = IAction<
  typeof ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS_SUCCESS,
  IAllProductsResponse
>;

export type GetProductDetailsActionType = IAction<
  typeof ACTION_TYPES.GET_PRODUCT_DETAILS
>;

export type GetProductDetailsSuccessActionType = IAction<
  typeof ACTION_TYPES.GET_PRODUCT_DETAILS_SUCCESS,
  IProductDetail
>;
