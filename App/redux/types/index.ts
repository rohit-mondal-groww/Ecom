import {ICartItem} from '../../common/dataTypes';
import {
  IAllProducts,
  IAllProductsResponse,
  IProductDetail,
} from '../../common/networkTypes';
import {ACTION_TYPES} from '../actionTypes';

export interface IAction<T, P = null> {
  type: T;
  payload: P;
}

export interface IGlobalState {
  common: ICommonState;
  order: IOrderState;
  favorites: IFavoritesState;
}

export interface ICommonState {
  products: {
    data: IAllProducts;
  };
  currentProductDetail: IProductDetail | {};
  isFetchingAllProducts: boolean;
  isFetchingProductDetailsById: boolean;
}

export interface ICartState {
  items: Array<ICartItem>;
  subTotalAmount: number;
  deliveryCharge: number;
  totalAmount: number;
}

export interface IOrderState {
  cart: ICartState;
}

export interface IFavoritesState {
  items: Array<IProductDetail>;
}

// get all products

export type GetAllProductsActionType = IAction<
  typeof ACTION_TYPES.GET_ALL_PRODUCTS
>;

export type GetAllProductsSuccessActionType = IAction<
  typeof ACTION_TYPES.SET_FETCHING_ALL_PRODUCTS_SUCCESS,
  IAllProductsResponse
>;

// get product by id

type GetProductDetailsByIdActionPayloadType = number;

export type GetProductDetailsByIdActionType = IAction<
  typeof ACTION_TYPES.GET_PRODUCT_DETAILS_BY_ID,
  GetProductDetailsByIdActionPayloadType
>;

export type GetProductDetailsByIdSuccessActionType = IAction<
  typeof ACTION_TYPES.SET_FETCHING_PRODUCT_DETAILS_BY_ID_SUCCESS,
  IProductDetail
>;

export type ProductActionTypes =
  | GetAllProductsActionType
  | GetAllProductsSuccessActionType
  | GetProductDetailsByIdActionType
  | GetProductDetailsByIdSuccessActionType;

// cart functionalities

export interface UpdateQuantityPayloadType {
  id: number;
}

export type AddItemToCartActionType = IAction<
  typeof ACTION_TYPES.ADD_PRODUCT_TO_CART,
  ICartItem
>;

export type IncreaseCartItemQuantityActionType = IAction<
  typeof ACTION_TYPES.INCREASE_ITEM_QUANTITY,
  UpdateQuantityPayloadType
>;

export type DecreaseCartItemQuantityActionType = IAction<
  typeof ACTION_TYPES.DECREASE_ITEM_QUANTITY,
  UpdateQuantityPayloadType
>;

export type CartActionTypes =
  | AddItemToCartActionType
  | IncreaseCartItemQuantityActionType
  | DecreaseCartItemQuantityActionType;

// favorites functionality

export type ToggleFavActionType = IAction<
  typeof ACTION_TYPES.TOGGLE_FAV_ITEM,
  ICartItem
>;

export type FavActionTypes = ToggleFavActionType;
