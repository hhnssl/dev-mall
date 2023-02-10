import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/" element={<CartPage />} />
        <Route path="/" element={<ProductDetailPage />} />
        <Route path="/" element={<ProductListPage />} /> */}
      </Routes>
    </div>
  );
}
export default App;
