import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import './App.css';
import Hero from './components/heroes/hero';
import Footer from './components/Footer/Footer'
import Product from './Pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'
import LoginPage from './components/LoginPage/LoginPage'; 




function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner = {men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid" />} />
          <Route path= "/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />

        </Routes>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
