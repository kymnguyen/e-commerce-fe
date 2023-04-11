import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderNavbar from './components/commons/header-navbar';
import CustomerPage from './pages/customer-page';
import ShopPage from './pages/shop-page';
import ProductPage from './pages/product-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/shops" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
