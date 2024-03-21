import React from "react";
import Image from "next/image";
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png' 
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
   return(
     <>
     <div className="flex flex-col justify-center items-center gap-6 mt-6 mb-4">
        <div className="flex items-center gap-5">
            <Image src={footer_logo} alt="" width={50} height={50} />
            <p className="text-[#383838] text-4xl font-semibold"> SHOPPER</p>
        </div>

        <ul className="flex list-none gap-6 text-[#252525] text-lg">
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Offices</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-5">
            <div className="p-4 bg-[#fbfbfb] border-1 border-[#ebebeb] rounded-full">
                <Image src={instagram_icon} alt="" width={30} height={30} />
            </div>
            <div className="p-4 bg-[#fbfbfb] border-1 border-[#ebebeb] rounded-full">
                <Image src={pinterest_icon} alt="" width={30} height={30} />
            </div>
            <div className="p-4 bg-[#fbfbfb] border-1 border-[#ebebeb] rounded-full">
                <Image src={whatsapp_icon} alt="" width={30} height={30} />
            </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 text-[#1a1a1a] text-lg">
            <hr className="w-100% border-none rounded-xl h-1 bg-[#c7c7c7]" />
            <p className="font-semibold">Copyright @ShoppingHub-All Rights Reserved</p>
        </div>
     </div>
     </>
   )
}
export default Footer;
