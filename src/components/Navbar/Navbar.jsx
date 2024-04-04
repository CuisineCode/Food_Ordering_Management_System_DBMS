import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginPage = () => {
    setIsLoginPageOpen(true);
    setIsRegisterOpen(false); // Close the Register component when opening the LoginPage
  };

  const closeOverlay = () => {
    setIsLoginPageOpen(false);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginPageOpen(false); // Close the LoginPage when opening the Register component
  };

  const handleToggleLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginPageOpen(true);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper's Hub</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={openLoginPage}>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
      {isLoginPageOpen && (
        <LoginPage
          onClose={closeOverlay}
          openRegister={openRegister}
        />
      )}
      {isRegisterOpen && <Register onClose={closeOverlay} handleToggleLogin={handleToggleLogin} />}
    </div>
  );
}

export default Navbar;