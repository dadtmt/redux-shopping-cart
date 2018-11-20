import viewReducer from "./viewReducer";

describe("viewReducer", () => {
  it("initial current page should be catalog", () => {
    const expected = "catalog";
    expect(viewReducer(expected, { type: "@@INIT" })).toEqual(expected);
  });
});
