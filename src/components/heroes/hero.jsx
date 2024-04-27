import React from "react";
import hand_icon from '../assets/hand_icon.png';
import hero_image from '../assets/hero_image.png';
import boy_removebg_preview from '../assets/boy_removebg_preview.png';
import girl_removebg_preview from '../assets/girl_removebg_preview.png';
import kids_removebg_preview from '../assets/kids_removebg_preview.png';
import '../heroes/hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New arrivals</h2>
                <div>
                    <div className="hero-hand-icon">
                     <p>JUST</p>
                    </div>
                    <p>FOR</p>
                    <p>YOU</p>
                </div>
            </div>
            <div className="hero-right">
    <div className="circular-background right-image ">
      <img src={girl_removebg_preview} alt="girl Image" className="girl-image" />
    </div>
  </div>
  <div className="hero-right">
    <div className="circular-background left-image">
      <img src={kids_removebg_preview} alt="kids Image" className="kids-image" />
    </div>
  <div className="hero-right">
    <div className="circular-background top-image">
    <img src={boy_removebg_preview} alt="boy Image" className="guy-image" />
    </div>
  </div>
  
  </div>
        </div>
    );
}

export default Hero;