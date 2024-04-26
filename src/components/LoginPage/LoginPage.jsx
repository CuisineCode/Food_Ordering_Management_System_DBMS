import React, { useState } from 'react';
import '../LoginPage/LoginPage.css';
import { FaUser, FaLock, FaTimes } from 'react-icons/fa';


const LoginPage = ({ onClose, openRegister, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginPage = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      setEmail('');
    } else {
      // Perform registration logic here
      // For demonstration, let's simulate successful registration
      setTimeout(() => {
        setLoggedIn(true);
        setIsLoggedIn(true); // Update registration status to true
      }, 1000);
    }
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };


  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='modal'>
        <FaTimes className='close-icon' onClick={onClose} />
        {!loggedIn ? (
          <form action=''>
            <h1>Login</h1>
            <div className='input-box'>

              <input type='email' placeholder='E-mail' required value={email} onChange={(event) => { setEmail(event.target.value) }} />
              <FaUser className='icon' />
            </div>

            <div className='input-box'>
              <input type='password' placeholder='Password' required value={password} onChange={(event) => { setPassword(event.target.value) }} />
              <FaLock className='icon' />
            </div>

            <div className='forgot-password'>
              <label>
                <input type='checkbox' /> Remember me
              </label>
              <a href='#'>Forgot password?</a>
            </div>

            <button onClick={handleLoginPage} type='submit' >Login</button>

            <div className='register-link'>
              <p>
                Don't have an account?<a href='#' onClick={openRegister}>Register</a>
              </p>
            </div>
          </form>
        ) : (
          <div className='t2'>
            <h1>You logged in successfully!</h1>
            {/* Add any content or redirection logic here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;