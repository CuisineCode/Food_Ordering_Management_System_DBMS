import React, { useState, useContext } from "react";
import '../ProductDisplay/ProductDisplay.css'
import { ShopContext } from "../../context/ShopContext";
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(""); // State to store the selected size
    const [errorMessage, setErrorMessage] = useState(""); // State to manage error message

    const handleAddToCart = () => {
        if (selectedSize === "") {
            setErrorMessage("Please select a size");
        } else {
            addToCart(product.id, selectedSize); // Pass selected size to addToCart function
            setErrorMessage(""); // Clear error message
        }
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, close-fitting overall guaranteed a best fit and can be worn on any occasion.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div onClick={() => setSelectedSize("S")}>S</div>
                        <div onClick={() => setSelectedSize("M")}>M</div>
                        <div onClick={() => setSelectedSize("L")}>L</div>
                        <div onClick={() => setSelectedSize("XL")}>XL</div>
                        <div onClick={() => setSelectedSize("XXL")}>XXL</div>
                    </div>
                </div>

                <div className="productdisplay-right-button">
                    <button onClick={handleAddToCart}>ADD TO CART</button>
                </div>

                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </div>
    );
}

export default ProductDisplay;
