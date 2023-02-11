import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import CartPage from './pages/CartPage/CartPage';
import JoinPage from './pages/JoinPage/JoinPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}
export default App;
