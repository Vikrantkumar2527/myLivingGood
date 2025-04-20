import React from "react";
import Title1 from "../Component/Title1";
import { assets } from "../assets/frontend_assets/assets";
import Subscribe from "../Component/Subscribe";
function Connect() {
    return ( 
        <div>
            <div className="flex justify-center">
                <Title1 text1={'CONTACT'} text2={'US'}/>
            </div>
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-center mt-8">
                <img className="w-40 sm:w-80 h-40 sm:h-80 mr-12" src={assets.contact_img} alt="" />
                <div className="flex flex-col justify-center">
                    <p className="mt-2 ">OUR STORE</p>
                    <p className="mt-2 text-gray-400">Beta 1 Block c-177</p>
                    <p className="mt-2 text-gray-400">Greater-Noida UttarPradesh</p>
                    <p className="mt-8 text-gray-400">tel: +91 8299349689</p>
                    <p className="mt-2 text-gray-400">Email: utonwork@gmail.com</p>
                </div>
            </div>
            <div className="mt-24"><Subscribe/></div>
            
          
        </div>
     );
}

export default Connect;