import React, { useState } from "react";
import "../Newsletter/NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Perform email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // Valid email
      setShowOverlay(true);
    } else {
      // Invalid email
      alert("Please enter a valid email address.");
    }
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className="newsletter">
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our NewsLetter and stay updated</p>
        <div className="box">
          <input
            type="email"
            placeholder="Your Email Id"
            className="w-full ml-8 border-none outline-none text-[#616161] font-serif text-base"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <span className="close-btn" onClick={handleOverlayClose}>
              &times;
            </span>
            <p>
              Subscribed newsletter successfully. You will receive regular
              updates on exclusive offers in your mail.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetter;