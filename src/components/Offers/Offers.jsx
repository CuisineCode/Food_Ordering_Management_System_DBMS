
import React from "react";

import exclusive_image from '../assets/exclusive_image.png';
import '../Offers/Offers.css' 


const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>
                    Check Now
                </button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" width={400} height={400} />
            </div>
        </div>
    );
};

export default Offers;
