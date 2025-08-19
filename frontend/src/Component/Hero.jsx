import React from "react";
import { assets } from "../assets/frontend_assets/assets";
function Hero() {
  return (
    <div className="flex md:flex-row flex-col w-full mx-2 sm:mx-5 border">
      <div className="md:w-1/2 w-full px-16 py-16  sm:px-32 sm:py-28  lg:py-40">
        <div className="flex items-center  p-2">
          <p className="h-1 w-1/6 border-t border-black "></p>
          <p>&nbsp;&nbsp;OUR RECOMMENDATIONS</p>
        </div>
        <div className="p-2 font-semibold text-4xl">
          <h1 className="prata-regular text-[25px] sm:text-[40px]">Top Rated Hostels</h1>
        </div>
        <div className="flex p-2 flex items-center">
          <p>BOOK NOW &nbsp;&nbsp;</p>
          <p className="h-1 w-1/6 border-t border-black "></p>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <img className="h-full" src={assets.hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
