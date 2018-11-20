import viewReducer from "./viewReducer";

describe("viewReducer", () => {
  it("initial current page should be catalog", () => {
    const expected = {
      currentPage: "catalog"
    };
    expect(viewReducer()).toEqual(expected);
  });
});
