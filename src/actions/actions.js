import { ADD_TO_CART } from "./actionTypes";

export const makeAddToCartAction = (item, quantity = 1) => ({
  type: ADD_TO_CART,
  ...item,
  quantity
});
