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
  };

  const closeOverlay = () => {
    setIsLoginPageOpen(false);
  };

  const handleToggleLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginPageOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Set logged in state if user is authenticated
  }, [isLoggedIn]);

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
          {activeMenu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => handleMenuClick("men")} className={activeMenu === "men" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Drinks</Link>
          {activeMenu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => handleMenuClick("women")} className={activeMenu === "women" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Food</Link>
          {activeMenu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => handleMenuClick("merchandise")} className={activeMenu === "merchandise" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Merchandise</Link>
          {activeMenu === "merchandise" ? <hr /> : null}
        </li>
        <li onClick={() => handleMenuClick("coffeeHome")} className={activeMenu === "coffeeHome" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Coffee at Home</Link>
          {activeMenu === "coffeeHome" ? <hr /> : null}
        </li>
        <li onClick={() => handleMenuClick("readyToEat")} className={activeMenu === "readyToEat" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Ready to Eat</Link>
          {activeMenu === "readyToEat" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <div className="profile-wrapper">
            <FaUser onClick={handleProfileClick} />
            {showLogoutOverlay && (
              <div className="logout-overlay" onClick={handleCancel}>
                <div className="logout-content" onClick={e => e.stopPropagation()}>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button onClick={openLoginPage}>Login</button>  // Clicking this will trigger Google Sign-In
        )}
        <Link to='/cart'>
          <img src={cartIcon} alt="Cart" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
      {isLoginPageOpen && (
        <LoginPage onClose={closeOverlay} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};
      

export default Navbar;