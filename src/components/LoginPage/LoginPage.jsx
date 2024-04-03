import React from 'react';
import '../LoginPage/LoginPage.css';
import { FaUser, FaLock, FaTimes } from 'react-icons/fa';

const LoginPage = ({ onClose, openRegister }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='modal'>
        <FaTimes className='close-icon' onClick={onClose} />
        <form action=''>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' required />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
            <input type='password' placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className='forgot-password'>
            <label>
              <input type='checkbox' /> Remember me
            </label>
            <a href='#'>Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className='register-link'>
            <p>
              Don't have an account?<a href='#' onClick={openRegister}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;