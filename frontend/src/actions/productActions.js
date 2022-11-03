import axios from "axios";

import {
  productListRequest,
  productListSuccess,
  productListFail,
} from "../reducers/productListReducers";

import {
  productDetailFail,
  productDetailRequest,
  productDetailSuccess,
} from "../reducers/productDetailReducers";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(productListRequest());
    const { data } = await axios.get("/api/products");
    dispatch(productListSuccess(data));
  } catch (error) {
    dispatch(
      productListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(productDetailRequest());
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(productDetailSuccess(data));
  } catch (error) {
    dispatch(
      productDetailFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
