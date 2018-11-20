import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = [];
const cartReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...previousState,
        {
          itemId: action.itemId,
          price: action.price,
          quantity: action.quantity
        }
      ];
    default:
      return previousState;
  }
};

export default cartReducer;
