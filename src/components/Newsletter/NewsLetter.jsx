import React from "react";

const NewsLetter = () => {
    return(
      <>
      <div className="w-11/12 max-w-6xl mx-auto h-[40vh] flex flex-col items-center justify-center m-auto pt-0 pb-0 pl-140 pl-140 mb-150 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-7">
        <h1 className="text-[#454545] text-6xl font-semibold"> Get Exclusive Offers on Your Email </h1>
        <p className="text-[#454545] text-xl"> Subscribe to our NewsLetter and stay updated</p>
        <div className="flex items-center justify-between bg-white w-96 h-16 rounded-md border-1 border-[#e3e3e3]">
            <input type="email" placeholder="Your Email Id" className="w-full ml-8 border-none outline-none text-[#616161] font-serif text-base" />
            <button className="w-1/4 h-full rounded-md bg-black text-white text-xs cursor-pointer"> Subscribe </button>
        </div>
      </div>
      </>
    );
}

export default NewsLetter;
