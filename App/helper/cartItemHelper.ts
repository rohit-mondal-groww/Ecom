import {ICartItem} from '../common/dataTypes';

// api contract doesn't have anything in cents. Normally, we should convert the price to the lower denomination and do all calculations. Ignoring for now

export const calculateTotalPriceOfCart = (cartItems: Array<ICartItem>) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};

const MIN_AMOUNT_FOR_ZERO_DELIVERY = 1999;
const DELIVERY_CHARGE_PERCENTAGE = 2;

export const calculateDeliveryCharge = (price: number) =>
  price > MIN_AMOUNT_FOR_ZERO_DELIVERY
    ? 0
    : (DELIVERY_CHARGE_PERCENTAGE * price) / 100;
