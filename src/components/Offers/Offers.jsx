
{/* Exclusive Offers Banner */}
import React from "react";
import Image from "next/image";
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
    return (
        <div className="w-11/12 max-w-screen-2xl mx-auto h-screen flex items-center justify-center bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
            <div className="flex-1 flex flex-col justify-center px-10">
                <h1 className="text-[#171717] text-7xl font-semibold mb-6">Exclusive</h1>
                <h1 className="text-[#171717] text-7xl font-semibold mb-6">Offers for You</h1>
                <p className="text-[#171717] text-xl font-semibold mb-10">ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="w-full max-w-xs h-16 rounded-2xl bg-[#ff4141] border-none text-white text-lg font-semibold cursor-pointer">
                    Check Now
                </button>
            </div>
            <div className="flex-1 flex items-center justify-end pr-10">
                <Image src={exclusive_image} alt="" width={400} height={400} />
            </div>
        </div>
    );
};

export default Offers;
