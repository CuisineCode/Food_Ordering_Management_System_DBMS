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



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="mens" />} />
          <Route path='/women' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
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
