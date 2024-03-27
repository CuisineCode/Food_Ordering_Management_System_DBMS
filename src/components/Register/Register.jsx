import React from 'react';
import '../Register/Register.css'; 
import { FaTimes } from 'react-icons/fa';

const Register = ({ onClose }) => {
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
          <h1>Register</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' required />
          </div>

          <div className='input-box'>
            <input type='email' placeholder='E-mail' required />
          </div>

          <div className='input-box'>
            <input type='password' placeholder='Password' required />
          </div>

           <div className='input-box'>
            <input type='password' placeholder='Confirm password' required />
          </div> 

          <button type='submit'>Register</button>
          <div className='register-link'>
            <p>
              Have an account?<a href='/login'> Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
