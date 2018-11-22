import cartReducer from "./cartReducer";
import { makeAddToCartAction } from "../actions/actions";

describe("cartReducer", () => {
  it("initial cart should be a list items", () => {
    const expected = [];
    expect(cartReducer()).toEqual(expected);
  });

  it("Cart should contain one item on ADD_TO_CART action", () => {
    const previousState = [];
    const itemToAdd = {
      itemId: "34567",
      price: 45
    };
    const action = makeAddToCartAction(itemToAdd);
    const expected = [
      {
        itemId: "34567",
        price: 45,
        quantity: 1
      }
    ];
    expect(cartReducer(previousState, action)).toEqual(expected);
  });
});
