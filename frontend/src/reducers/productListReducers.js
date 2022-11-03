import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: "productList",
  initialState: { loading: false, products: [] },
  reducers: {
    productListRequest: (state, action) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    productListSuccess: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.products = action.payload;
      }
    },
    productListFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { productListRequest, productListSuccess, productListFail } =
  productListSlice.actions;

export default productListSlice.reducer;
