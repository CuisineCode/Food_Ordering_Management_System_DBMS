import React from "react";
import '../Newsletter/NewsLetter.css';
const NewsLetter = () => {
    return(
      <>
      <div className = "newsletter">
        <h1> Get Exclusive Offers on Your Email </h1>
        <p> Subscribe to our NewsLetter and stay updated</p>
        <div>
            <input type="email" placeholder="Your Email Id" className="w-full ml-8 border-none outline-none text-[#616161] font-serif text-base" />
            <button> Subscribe </button>
        </div>
      </div>
      </>
    );
}

export default NewsLetter;
