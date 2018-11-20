const initialState = [
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
const catalogReducer = (previousState = initialState, action) => previousState;

export default catalogReducer;
