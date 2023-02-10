import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: { productList: [] },
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;

// getAllProducts의 state.productListd에서 state는 initialState를 가리킴
