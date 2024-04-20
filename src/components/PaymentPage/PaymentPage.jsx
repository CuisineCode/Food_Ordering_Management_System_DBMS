import React, { useState } from 'react';
import './PaymentPage.css';
import phonepe from '../assets/phonepe-logo-icon.svg';
import paytm from '../assets/paytm-icon_1.png';
import googlepay from '../assets/google-pay-icon.webp';
import { FaTimes } from 'react-icons/fa';

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [upiId, setUpiId] = useState('');
  const [showCardDetailsModal, setShowCardDetailsModal] = useState(false);
  const [showNetBankingOptions, setShowNetBankingOptions] = useState(false); 
  const [selectedNetBankingOption, setSelectedNetBankingOption] = useState('');

  const handlePaymentMethodClick = (method) => {
    if (selectedPaymentMethod === method) {
      setSelectedPaymentMethod(null);
    } else {
      setSelectedPaymentMethod(method);
      if (method === 'creditCard') {
        setShowCardDetailsModal(true);
      }
    }
  };

  


  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleUpiIdSubmit = (e) => {
    e.preventDefault();
    if (upiId) {
      alert(`Payment request sent to UPI ID ${upiId}`);
      setUpiId('');
    }
  };

  const handleCloseCardDetailsModal = () => {
    setShowCardDetailsModal(false);
  };

   const toggleNetBankingOptions = () => {
    setShowNetBankingOptions(!showNetBankingOptions);
  };

  const handleNetBankingOptionChange = (e) => {
    setSelectedNetBankingOption(e.target.value);
  };

  const handleContinueNetBanking = () => {
    if (selectedNetBankingOption &&  selectedNetBankingOption !== 'Select a option') {
      alert(`You will be securely directed to the ${selectedNetBankingOption} to enter your password and complete your purchase.`);
    } else {
      alert('Please select a Net Banking option.');
    }
  };



  return (
    <div className="payment-page-container">
      <div className="payment-page">
        <div className="payment-container">
          <div className="recommended-container">
            <h2>RECOMMENDED</h2>
            <div className="payment-method">
              <div className="payment-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="payment-info">
                <h3>Cash on Delivery/Pay on Delivery</h3>
                <p>Cash, UPI and Cards accepted. Know more.</p>
              </div>
            </div>
          </div>
          <div className="amazon-pay-container">
            <h2>PAYMENT METHODS</h2>
            <div
              className="payment-method"
              onClick={() => handlePaymentMethodClick("upi")}
            >
              <div className="payment-icon">
                <i className="fab fa-amazon-pay"></i>
              </div>
              <div className="payment-info">
                <h3>Other UPI Apps</h3>
                <div className="icon-container">
                  <img
                    src={phonepe}
                    alt=""
                    onClick={() => handlePaymentMethodClick("phonepe")}
                  />
                  <img
                    src={paytm}
                    alt=""
                    onClick={() => handlePaymentMethodClick("paytm")}
                  />
                  <img
                    src={googlepay}
                    alt=""
                    onClick={() => handlePaymentMethodClick("googlepay")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="payment-info">
            {selectedPaymentMethod === "upi" && (
              <div>
                <form onSubmit={handleUpiIdSubmit}>
                  <input
                    type="text"
                    placeholder="Enter UPI ID"
                    className="upi-input"
                    value={upiId}
                    onChange={handleUpiIdChange}
                  />
                </form>
              </div>
            )}
            {selectedPaymentMethod === "phonepe" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter PhonePe UPI ID"
                  className="upi-input"
                />
              </div>
            )}
            {selectedPaymentMethod === "paytm" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter Paytm UPI ID"
                  className="upi-input"
                />
              </div>
            )}
            {selectedPaymentMethod === "googlepay" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter Google Pay UPI ID"
                  className="upi-input"
                />
              </div>
            )}
          </div>
          <div className="other-payment-container">
            <h2>MORE WAYS TO PAY</h2>
            <div
              className="payment-method"
              onClick={() => handlePaymentMethodClick("creditCard")}
            >
              <div className="payment-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <div className="payment-info">
                <h3>Credit or debit card</h3>
              </div>
            </div>
            
            <div className="payment-method">
              <div className="payment-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="payment-info">
                <h3 onClick={toggleNetBankingOptions}>Net Banking</h3>
               {showNetBankingOptions && (
                <div className='net-banking-options'>
                <select onChange={handleNetBankingOptionChange}>
                  <option>Select a option</option>
                  <option>Airtel Payments Bank</option>
                  <option>HDFC Bank</option>
                  <option>State Bank of India</option>
                  <option>Bank of Baroda</option>
                  <option>Induslnd Bank</option>
                </select>
                <button className="net-banking-continue" onClick={handleContinueNetBanking}>Continue</button>
                </div>
               )}
              </div>
            </div>
          </div>
          <div className="promo-container">
           {/* <button className="continue-button">Continue</button>*/}
          </div>
        </div>
      </div>
      {showCardDetailsModal && <CardDetailsModal onClose={handleCloseCardDetailsModal} />}
    </div>
  );
};

const CardDetailsModal = ({ onClose }) => {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiryMonth: '',
    expiryYear: '',
  });

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevCardDetails) => ({
      ...prevCardDetails,
      [name]: value,
    }));
  };
  
  const handleEnterCardDetails = () => {
    if (cardDetails.name === '' || cardDetails.number === '' || cardDetails.expiryMonth === '' || cardDetails.expiryYear === '') {
      alert('All fields are required.');
    }
    else{
    alert('Card details entered successfully!');
    }
  };

  return (
    <div className="modal-overlay">
       
      <div className="modal-content">
       <FaTimes className='close-icon' onClick={onClose} />
        
        <h2>Enter Card Details</h2>
        <p>Please ensure your card is enabled for online transactions.</p>
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={cardDetails.name}
          onChange={handleCardDetailsChange} required
        />
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={handleCardDetailsChange}  required
        />
        <div className="expiry-date">
          <select
            name="expiryMonth"
            value={cardDetails.expiryMonth}
            onChange={handleCardDetailsChange}  required
          >
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
         
          </select>
          <select
            name="expiryYear"
            value={cardDetails.expiryYear}
            onChange={handleCardDetailsChange}
          >
            <option value="">Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          
          </select>
        </div>
        <button className="enter-card-details" onClick={handleEnterCardDetails}>Enter Card Details</button>
      </div>
    </div>
  );
};

export default PaymentPage;
