import React, { useContext, useState, useCallback, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/l1.png';
import cartIcon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { ShopContext } from '../../context/ShopContext';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutOverlay, setShowLogoutOverlay] = useState(false);

  const openLoginPage = () => {
    setIsLoginPageOpen(true);
    setIsRegisterOpen(false);
  };

  const closeOverlay = () => {
    setIsLoginPageOpen(false);
    setIsRegisterOpen(false);
    setShowLogoutOverlay(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginPageOpen(false);
  };

  const handleToggleLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginPageOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogoutOverlay(false);
  };

  const handleProfileClick = useCallback(() => {
    setShowLogoutOverlay(true);
  }, []);

  const handleCancel = () => {
    setShowLogoutOverlay(false);
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation();
  };

   useEffect(() => {
    setShowLogoutOverlay(false);
  }, [isLoggedIn]);


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
        {isLoggedIn ? (
          <div className="profile-wrapper" onClick={handleProfileClick}>
            <FaUser className="profile-icon" />
            {showLogoutOverlay && (
              <div className="logout-overlay" onClick={handleOverlayClick}>
                <p>Do you want to log out?</p>
                <div className="button-container">
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
              </div>
            )}
          </div>
        ) : (
          <button onClick={openLoginPage}>Login</button>
        )}
        <Link to='/cart'><img src={cartIcon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      {isLoginPageOpen && (
        <LoginPage
          onClose={closeOverlay}
          openRegister={openRegister}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {isRegisterOpen && (
        <Register
          onClose={closeOverlay}
          handleToggleLogin={handleToggleLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
};

export default Navbar;