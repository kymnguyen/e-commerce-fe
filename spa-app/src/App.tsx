import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNavbar from './components/commons/header-navbar';
import CustomerPage from './pages/customer-page';
import ShopPage from './pages/shop-page';
import ProductPage from './pages/product-page';
import HomePage from './pages/home-page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/shops" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;