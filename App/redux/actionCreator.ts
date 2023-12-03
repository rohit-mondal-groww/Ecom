import {ICartItem} from '../common/dataTypes';
import {IAllProducts, IProductDetail} from '../common/networkTypes';
import {ACTION_TYPES} from './actionTypes';

//get all products
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

// get product details by id

export const getProductDetailsByIdActionCreator = (id: number) => {
  return {
    type: ACTION_TYPES.GET_PRODUCT_DETAILS_BY_ID,
    payload: id,
  };
};

export const setFetchingProductDetailsByIdActionCreator = (payload: {
  fetching: boolean;
}) => {
  return {
    type: ACTION_TYPES.SET_FETCHING_PRODUCT_DETAILS_BY_ID,
    payload,
  };
};

export const setFetchingProductDetailsByIdSuccessActionCreator = (
  payload: IAllProducts,
) => {
  return {
    type: ACTION_TYPES.SET_FETCHING_PRODUCT_DETAILS_BY_ID_SUCCESS,
    payload,
  };
};

export const setFetchingProductDetailsByIdErrorActionCreator = (error: any) => {
  return {
    type: ACTION_TYPES.SET_FETCHING_PRODUCT_DETAILS_BY_ID_ERROR,
    error,
  };
};

// cart action creators

export const addProductToCartActionCreator = (cartItem: ICartItem) => {
  return {
    type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
    payload: cartItem,
  };
};

export const increaseCartItemQuantityActionCreator = (id: number) => {
  return {
    type: ACTION_TYPES.INCREASE_ITEM_QUANTITY,
    payload: {id},
  };
};

export const decreaseCartItemQuantityActionCreator = (id: number) => {
  return {
    type: ACTION_TYPES.DECREASE_ITEM_QUANTITY,
    payload: {id},
  };
};

// separate action because entire product can be removed at once even if the quantity is greater than one
export const removeItemFromCartActionCreator = (id: number) => {
  return {
    type: ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    payload: {id},
  };
};

// favorites

export const toggleFavoriteActionCreator = (product: IProductDetail) => {
  return {
    type: ACTION_TYPES.TOGGLE_FAV_ITEM,
    payload: product,
  };
};