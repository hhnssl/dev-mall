import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer';
import productDetailReducer from './productDetailReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    productInfo: productDetailReducer,
  },
});

export default store;
