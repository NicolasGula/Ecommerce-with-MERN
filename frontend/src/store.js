import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import productListReducer from "./reducers/productListReducers";
import productDetailReducer from "./reducers/productDetailReducers";
import cartReducer from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
});

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

const initialState = {
  cart: { cartItems: "hi" },
};

const middleware = [thunk];

const store = configureStore(
  {
    reducer: {
      productList: productListReducer,
      productDetails: productDetailReducer,
      cart: cartReducer,
    },
  },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
