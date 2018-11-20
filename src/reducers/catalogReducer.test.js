import catalogReducer from "./catalogReducer";

describe("catalogReducer", () => {
  it("initial catalog should be a list items", () => {
    const expected = [
      {
        itemId: "34567",
        price: 45
      },
      {
        itemId: "34545",
        price: 42
      },
      {
        itemId: "34578",
        price: 5
      }
    ];
    expect(catalogReducer(expected, { type: "@@INIT" })).toEqual(expected);
  });
});
