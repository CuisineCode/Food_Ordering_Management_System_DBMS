import React from "react";
import hand_icon from '../assets/hand_icon.png';
import hero_image from '../assets/hero_image.png';
import '../heroes/hero.css' 

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New arrivals</h2>
                <div>
                <div className="hero-hand-icon ">
                    <p>JUST</p>
    
                   </div>
                    <p>FOR</p>
                    <p>YOU</p>
                </div>
            </div>
            
            <div className="hero-right">
                <img src={hero_image} alt="" width={550} height={800} />
        </div>
        </div>
    );
}

export default Hero;