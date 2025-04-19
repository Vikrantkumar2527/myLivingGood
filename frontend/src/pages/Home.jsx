import React from "react";
import Hero from "../Component/Hero";
import Title from "../Component/Title";
import LatestCollection from "../Component/LatestCollection";
import BestSeller from "../Component/BestSeller";
import Policy from "../Component/Policy";
import Subscribe from "../Component/Subscribe";


function Home() {
    return ( 
        <>
         <Hero/>
         <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
         <LatestCollection/>
         <Title text1={"BEST"} text2={"SELLER"}/>
         <BestSeller/>
         <Policy/>
         <Subscribe/>
         
        </>
     );
}

export default Home;