import React from "react";
import Title1 from "../Component/Title1";
import { assets } from "../assets/frontend_assets/assets";
import Subscibe from "../Component/Subscribe"
import AboutImage from "../Component/AboutImage";
function About() {
  return (
    <div className="mt-36">
      <div className="flex">
        <Title1 text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="mt-2 ">
        <div className="sm:text-center border border-black py-4 px-4  sm:px-12 rounded">
          <h1 className="font-bold text-[30px]">My Living Good</h1>
          <div className="mt-4 text-[grey]">
            Living a good life involves finding a balance between work, personal growth, and relationships. It's about pursuing passions, staying curious, and continuously learning. Good living also includes maintaining physical and mental health, practicing gratitude, and finding joy in everyday moments. Building strong connections with family and friends, contributing to the community, and helping others add meaning to life. It's essential to live authentically, embracing both successes and failures as part of the journey. Ultimately, living well means being present, appreciating life’s simple pleasures, and striving for personal fulfillment and happiness.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 ">
              <AboutImage classextra={"users"} text={"200+ Students connected"}/>
              <AboutImage classextra={"house"} text={"40+ Rentals Available"}/>
              <AboutImage classextra={"bed"} text={"200+ Beds Available"}/>
              <AboutImage classextra={"location-dot"} text={"10+ Area covered"}/>
          </div>
          
        </div>
      </div>
      {/* second section */}
      <div className="mt-16 mb-4">
        <Title1 text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      {/* 3 box of company  excellence */}
      <div className="flex w-full mb-20">
        <div className="w-1/2 sm:w-1/3 border border-black h-52 flex  items-center p-2 sm:p-20">
          <div className=" text-center ">
            <p className="font-bold mb-4 text-sm sm:text-xl">AFFORDABLE OPTIONS:</p>
            <p className="text-[10px]  sm:text-[15px] font-light text-gray-400">
              Pocket-friendly stays that perfectly fit a student’s budget.
            </p>
          </div>
        </div>


        <div className="w-1/3 border border-black flex h-52 items-center p-[52px] hidden sm:block">
          <div className=" text-center">
            <p className="font-bold mb-4 text-sm sm:text-xl">VERIFIED HOSTELS & PGs:</p>
            <p className="text-[15px] font-light text-gray-400">
              Every listing is carefully verified for quality and safety.
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
