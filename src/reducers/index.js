import {combineReducers} from "redux"

import catalogReducer from './catalogReducer'
import cartReducer from './cartReducer'
import viewReducer from './viewReducer'

const shoppingCartApp = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  view: viewReducer
})

export default shoppingCartApp
