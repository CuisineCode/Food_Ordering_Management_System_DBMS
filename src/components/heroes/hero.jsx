import React from "react";
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
    return (
        <div className="flex h-screen bg-gradient-to-b from-purple-100 to-green-200 bg-opacity-50">
            <div className="flex-1 flex flex-col justify-start pl-16 leading-7 ml-10 mt-24">
                <h2 className="text-3xl font-semibold pt-10 mb-10 ml-40">New Releases Only {/*<Image src={hand_icon} alt="" width={50} height={50} />*/}</h2>
                <div className="text-7xl font-bold ">
                    <p className="ml-40 mb-5">New</p>
                    <p className="mb-5 ml-40">Collections</p>
                    <p className="mb-1 ml-40">For Everyone</p>
                </div>
                
                <div className="flex items-center justify-start mt-10 mb-30 ml-40">
                    <div className="bg-red-500 text-white rounded-full py-2 px-6 text-lg font-semibold flex items-center cursor-pointer">
                        Latest Collection
                        <img src={arrow_icon} alt="" width={30} height={60}  />
                    </div>
                </div>
            </div>
            
            <div className="flex-1 items-center justify-center mr-30 flex flex-col">
                <div className="flex items-center justify-center ">
                    <img src={hero_image} alt="" width={550} height={800} />
                </div>
            </div>
        </div>
    );
}

export default Hero;