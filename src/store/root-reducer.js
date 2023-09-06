import { combineReducers } from "redux";

import { productsReducer } from "./products/product.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
