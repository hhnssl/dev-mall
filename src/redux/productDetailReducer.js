// 메인에서 상품 하나 클릭할 때 데이터 저장

import { createSlice } from '@reduxjs/toolkit';

const productDetailSlice = createSlice({
  name: 'productInfo',
  initialState: { productDetail: [] },
  reducers: {
    getProductDetail(state, action) {
      state.productDetail = action.payload;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;
export default productDetailSlice.reducer;
