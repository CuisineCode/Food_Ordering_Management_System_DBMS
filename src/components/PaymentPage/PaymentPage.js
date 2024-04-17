import React, { useState } from 'react';
import './PaymentPage.css';
import phonepe from '../assets/phonepe-logo-icon.svg';
import paytm from '../assets/paytm-icon_1.png';
import googlepay from '../assets/google-pay-icon.webp';

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

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
            <div className="payment-method">
              <div className="payment-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <div className="payment-info">
                <h3>Select Your Debit Card</h3>
                <p>CardHolder name</p>
              </div>
            </div>
          </div>
          <div className="amazon-pay-container">
            <h2>PAYMENT METHODS</h2>
            <div
              className="payment-method"
              onClick={() => setSelectedPaymentMethod("upi")}
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
                    onClick={() => setSelectedPaymentMethod("phonepe")}
                  />
                  <img
                    src={paytm}
                    alt=""
                    onClick={() => setSelectedPaymentMethod("paytm")}
                  />
                  <img
                    src={googlepay}
                    alt=""
                    onClick={() => setSelectedPaymentMethod("googlepay")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="other-payment-container">
            <h2>MORE WAYS TO PAY</h2>
            <div className="payment-method">
              <div className="payment-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <div className="payment-info">
                <h3>Credit or debit card</h3>
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="payment-info">
                <h3>EMI</h3>
                <p>Unavailable for this payment. Why?</p>
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="payment-info">
                <h3>Net Banking</h3>
              </div>
            </div>
          </div>
          <div className="payment-info">
            {selectedPaymentMethod === "upi" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  className="upi-input"
                />
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
          <div className="promo-container">
            <button className="continue-button">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;