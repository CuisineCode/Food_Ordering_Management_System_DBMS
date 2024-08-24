import React, { useContext, useState, useCallback, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/l3.png';
import cartIcon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register';
import { ShopContext } from '../../context/ShopContext';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutOverlay, setShowLogoutOverlay] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu open/close
  };

  useEffect(() => {
    setShowLogoutOverlay(false);
  }, [isLoggedIn]);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsMobileMenuOpen(false); // Close mobile menu when an item is clicked
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Cuisine Code</p>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
      </div>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li onClick={() => handleMenuClick("shop")} className={activeMenu === "shop" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/'>Bestseller</Link>
          {activeMenu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick("men")} className={activeMenu === "shop" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Drinks</Link>
          {activeMenu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick("women")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Food</Link>
          {activeMenu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick("merchandise")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Merchandise</Link>
          {activeMenu === "merchandise" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick("coffeeHome")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Coffee at Home</Link>
          {activeMenu === "coffeeHome" ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick("readyToEat")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Ready to Eat</Link>
          {activeMenu === "readyToEat" ? <hr /> : <></>}
        </li>
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
