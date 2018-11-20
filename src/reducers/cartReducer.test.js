import cartReducer from "./cartReducer";

describe("cartReducer", () => {
  it("initial cart should be a list items", () => {
    const expected = [];
    expect(cartReducer()).toEqual(expected);
  });
});
