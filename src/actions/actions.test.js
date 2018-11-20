import { ADD_TO_CART } from "./actionTypes";
import { makeAddToCartAction } from "./actions";

describe("ADD_TO_CART action creator", () => {
  it("should return a ADD_TO_CART action with itemId, quantity and price", () => {
    const item = {
      itemId: "34567",
      price: 45
    };
    const quantity = 4;
    const expected = {
      type: ADD_TO_CART,
      itemId: "34567",
      quantity: 4,
      price: 45
    };

    expect(makeAddToCartAction(item, quantity)).toEqual(expected);
  });
  it("should return a ADD_TO_CART action with itemId, price and quantity 1 if no quantity specified", () => {
    const item = {
      itemId: "34567",
      price: 45
    };

    const expected = {
      type: ADD_TO_CART,
      itemId: "34567",
      quantity: 1,
      price: 45
    };

    expect(makeAddToCartAction(item)).toEqual(expected);
  });
});
