import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = "catalog";

const viewReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return "cart";
    default:
      return previousState;
  }
};
export default viewReducer;
