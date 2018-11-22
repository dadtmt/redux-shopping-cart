import viewReducer from "./viewReducer";
import { ADD_TO_CART } from "../actions/actionTypes";

describe("viewReducer", () => {
  it("initial current page should be catalog", () => {
    const expected = "catalog";
    expect(viewReducer(expected, { type: "@@INIT" })).toEqual(expected);
  });
  it("change to cart when ADD-TO-CART", () => {
    const expected = "cart";
    expect(viewReducer("catalog", { type: ADD_TO_CART })).toEqual(expected);
  });
});
