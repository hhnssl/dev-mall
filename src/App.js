import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';

import CartPage from './pages/CartPage/CartPage';
import JoinPage from './pages/JoinPage/JoinPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <ProductDetailPage />
    </div>
  );
}
export default App;
