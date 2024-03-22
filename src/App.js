import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import './App.css';
import Hero from './components/heroes/hero';
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner = {men_banner} category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kids" />} />
          <Route path='/product' element={<product />}>
          <Route path=':productId' element={<product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />

        </Routes>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
