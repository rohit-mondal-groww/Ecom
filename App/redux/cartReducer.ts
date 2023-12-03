import {ICartItem} from '../common/dataTypes';
import {
  calculateDeliveryCharge,
  calculateTotalPriceOfCart,
} from '../helper/cartItemHelper';
import {showSnackbar} from '../helper/uiHelpers';
import {ACTION_TYPES} from './actionTypes';
import {CartActionTypes, IOrderState} from './types';

const orderState: IOrderState = {
  cart: {
    items: [],
    subTotalAmount: 0,
    deliveryCharge: 0,
    totalAmount: 0,
  },
};

const addToCart = (state: IOrderState, payload: ICartItem) => {
  const {quantity, ...rest} = payload;
  const existingItemIndex = state.cart.items.findIndex(
    (item: ICartItem) => item.id === rest.id,
  );

  if (existingItemIndex !== -1) {
    // update quantity if item already exists
    const updatedCartItems = [...state.cart.items];
    updatedCartItems[existingItemIndex].quantity += quantity;
    showSnackbar(
      `${updatedCartItems[existingItemIndex].quantity} '${updatedCartItems[existingItemIndex].title}' present in cart now `,
    );
    const subTotalAmount = calculateTotalPriceOfCart(updatedCartItems);
    const deliveryCharge = calculateDeliveryCharge(subTotalAmount);
    return {
      ...state,
      cart: {
        items: updatedCartItems,
        subTotalAmount,
        deliveryCharge,
        totalAmount: subTotalAmount + deliveryCharge,
      },
    };
  } else {
    // add new item in cart
    const newCartItem = {...rest, quantity};
    const updatedCartItems = [...state.cart.items, newCartItem];
    showSnackbar(`1 '${rest.title}' present in cart now`);

    const subTotalAmount = calculateTotalPriceOfCart(updatedCartItems);
    const deliveryCharge = calculateDeliveryCharge(subTotalAmount);
    return {
      ...state,
      cart: {
        items: updatedCartItems,
        subTotalAmount,
        deliveryCharge,
        totalAmount: subTotalAmount + deliveryCharge,
      },
    };
  }
};

const increaseCartItemQuantity = (
  state: IOrderState,
  payload: {id: number},
) => {
  const {id} = payload;
  const updatedCartItems = state.cart.items.map((item: ICartItem) =>
    item.id === id ? {...item, quantity: item.quantity + 1} : item,
  );
  const increasedTotalPrice = calculateTotalPriceOfCart(updatedCartItems);
  const deliveryCharge = calculateDeliveryCharge(increasedTotalPrice);

  return {
    ...state,
    cart: {
      items: updatedCartItems,
      subTotalAmount: increasedTotalPrice,
      deliveryCharge,
      totalAmount: increasedTotalPrice + deliveryCharge,
    },
  };
};

const decreaseCartItemQuantity = (
  state: IOrderState,
  payload: {id: number},
) => {
  const {id} = payload;
  const updatedCartItems = state.cart.items.map(item =>
    item.id === id && item.quantity > 1
      ? {...item, quantity: item.quantity - 1}
      : item,
  );

  const decreasedTotalPrice = calculateTotalPriceOfCart(updatedCartItems);
  const deliveryCharge = calculateDeliveryCharge(decreasedTotalPrice);

  return {
    ...state,
    cart: {
      items: updatedCartItems,
      subTotalAmount: decreasedTotalPrice,
      deliveryCharge,
      totalAmount: decreasedTotalPrice + deliveryCharge,
    },
  };
};

const removeItemFromCart = (state: IOrderState, payload: {id: number}) => {
  const {id} = payload;
  const updatedCartItems = state.cart.items.filter(item => item.id !== id);
  const decreasedTotalPrice = calculateTotalPriceOfCart(updatedCartItems);
  const deliveryCharge = calculateDeliveryCharge(decreasedTotalPrice);
  return {
    ...state,
    cart: {
      items: updatedCartItems,
      subTotalAmount: decreasedTotalPrice,
      deliveryCharge,
      totalAmount: decreasedTotalPrice + deliveryCharge,
    },
  };
};
export const cartReducer = (
  initialState = orderState,
  action: CartActionTypes,
) => {
  const {type, payload} = action;
  switch (type) {
    // add to cart
    case ACTION_TYPES.ADD_PRODUCT_TO_CART:
      return addToCart(initialState, payload);
    case ACTION_TYPES.INCREASE_ITEM_QUANTITY:
      return increaseCartItemQuantity(initialState, payload);
    case ACTION_TYPES.DECREASE_ITEM_QUANTITY:
      return decreaseCartItemQuantity(initialState, payload);
    case ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return removeItemFromCart(initialState, payload);
    default:
      return initialState;
  }
};
