import React from "react";
import Title1 from "../Component/Title1";
import { assets } from "../assets/frontend_assets/assets";
import Subscibe from "../Component/Subscribe"
function About() {
  return (
    <div className="m-0 sm:m-8 ">
      <div className="flex">
        <Title1 text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col text-center sm:flex-row  gap-4 mt-5 ">
        <img className="h-80 w-96" src={assets.about_img} alt="" />
        <div className="p-5 text-gray-400">
          <p className="mb-4">
            Forever Was Born Out Of A Passion For Innovation And A Desire To
            Revolutionize The Way People Shop Online. Our Journey Began With A
            Simple Idea: To Provide A Platform Where Customers Can Easily
            Discover, Explore, And Purchase A Wide Range Of Products From The
            Comfort Of Their Homes.
          </p>
          <p className="mb-4">
            Since Our Inception, We've Worked Tirelessly To Curate A Diverse
            Selection Of High-Quality Products That Cater To Every Taste And
            Preference. From Fashion And Beauty To Electronics And Home
            Essentials, We Offer An Extensive Collection Sourced From Trusted
            Brands And Suppliers.
          </p>
          <p className="font-bold">Our Mission</p>
          <p>
            Our Mission At Forever Is To Empower Customers With Choice,
            Convenience, And Confidence. We're Dedicated To Providing A Seamless
            Shopping Experience That Exceeds Expectations, From Browsing And
            Ordering To Delivery And Beyond
          </p>
        </div>
      </div>
      <div className="mt-16 mb-4">
        <Title1 text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      {/* 3 box of company  excellence */}
      <div className="flex w-full mb-20">
        <div className="w-1/2 sm:w-1/3 border border-black h-52 flex  items-center p-2 sm:p-20">
          <div className=" text-center ">
            <p className="font-bold mb-4 text-sm sm:text-xl">QUALITY ASSURANCE:</p>
            <p className="text-[10px] sm:text-[12px] font-light text-gray-400">
              We Meticulously Select And Vet Each Product To Ensure It Meets Our
              Stringent Quality Standards.
            </p>
          </div>
        </div>


        <div className="w-1/3 border border-black flex h-52 items-center p-[52px] hidden sm:block">
          <div className=" text-center">
            <p className="font-bold mb-4 text-sm sm:text-xl">CONVENIENCE:</p>
            <p className="text-[12px] font-light text-gray-400">
              With Our User-Friendly Interface And Hassle-Free Ordering Process, Shopping   Has Never Been Easier
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 border border-black flex h-52 items-center p-2 sm:p-20">
        <div className=" text-center ">
            <p className="font-bold mb-4 text-sm sm:text-xl">EXCEPTIONAL CUSTOMER SERVICE:</p>
            <p className="text-[10px] sm:text-[12px] font-light text-gray-400">
            Our Team Of Dedicated Professionals Is Here To Assist You The Way, Ensuring Your Satisfaction Is Our Top Priority.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
          <Subscibe/>
      </div>
      
    </div>
  );
}

export default About;
