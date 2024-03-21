import logo from './logo.svg';
import React from 'react';
import './App.css';
import Hero from './components/heroes/hero';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
     
       <Navbar/>
       <Routes>   
      <Route path='/' element={<Shop/>}/>

       <Route path='/mens' element={<ShopCategory category="mens"/>}/>
       <Route path='/Womens' element={<ShopCategory category="womens"/>}/>
       <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='product' element={<product/>}/>
      <Route path=':productId' element={<product/>}/>
       

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
       </Routes>
      
      </BrowserRouter> 
    </div>
  );
}

export default App;
