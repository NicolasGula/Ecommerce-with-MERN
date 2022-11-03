import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
  name: "product",
  initialState: { loading: false, product: [{ reviews: [] }] },
  reducers: {
    productDetailRequest: (state, action) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    productDetailSuccess: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.product = action.payload;
      }
    },
    productDetailFail: (state, action) => {
      if (!state.loading) {
        state.loading = false;
        state.error = action.payload;
      }
    },
  },
});

export const { productDetailRequest, productDetailSuccess, productDetailFail } =
  productDetailSlice.actions;

export default productDetailSlice.reducer;
