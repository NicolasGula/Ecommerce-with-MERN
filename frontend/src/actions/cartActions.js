import axios from "axios";

import { cartAddItem } from "../reducers/cartReducers";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  console.log(id);
  const { data } = await axios.get(`/api/products/${id}`);
  data.quantity = Number(quantity);

  dispatch(cartAddItem(data));

  // dispatch(cartAddItem(payload: {
  //   product: data._id,
  //   name: data.name,
  //   image: data.image,
  //   price: data.price,
  //   countInStock: data.countInStock,
  //   quantity,
  // }));

  // dispatch({
  //   type: CART_ADD_ITEM,
  //   payload: {
  //     product: data._id,
  //     name: data.name,
  //     image: data.image,
  //     price: data.price,
  //     countInStock: data.countInStock,
  //     quantity,
  //   },
  // });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
