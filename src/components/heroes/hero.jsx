import React from "react";
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';
import '../heroes/hero.css' 

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Releases Only </h2>
                <div>
                <div className="hero-hand-icon ">
                    <p>New</p>
                    <img src={hand_icon} alt="" width={50} height={50} />
                   </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                
                <div className="hero-latest-btn">
                    
                        <div> Latest Collection </div>
                        <img src={arrow_icon} alt="" width={30} height={60}  />
                    
                </div>
            </div>
            
            <div className="hero-right">
                <img src={hero_image} alt="" width={550} height={800} />
                
                    
                
            
        </div>
        </div>
    );
}

export default Hero;