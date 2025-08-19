import React, { useContext, useEffect } from "react";
import "./Home.css"
import Hero from "../Component/Hero";
import Title from "../Component/Title";
import LatestCollection from "../Component/LatestCollection";
import BestSeller from "../Component/BestSeller";
import Policy from "../Component/Policy";
import ContactImage from "../Component/ContactImage";
import ContactForm from "../Component/ContactForm";
import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import Subscribe from "../Component/Subscribe";


function Home() {
     const {setToken,setUser,currency,products,backendUrl,setId}=useContext(ShopContext);
     const [searchParams] = useSearchParams();
        
     useEffect(
          ()=>{
               const token = searchParams.get("token");
               const username = searchParams.get("username");
               const id = searchParams.get("id");
               if(token && username){
               setToken(token);
               setUser(username);
               setId(id)
               localStorage.setItem("token",token);
               localStorage.setItem("user",username);
               localStorage.setItem("id",id)
          }
     },
          [searchParams]
     )
     
    return ( 
         <div className="Homepage">
         <Hero/>
         <Title text1={"LATEST"} text2={"UPLOADS"}/>
         {products.length>0?<LatestCollection products={products} currency={currency}/>:<div>loading data</div>}
         <Title text1={"TRENDING"} text2={"HOSTEL"}/>

         {/* <BestSeller/> */}
          {products.length>0?<BestSeller products={products} currency={currency}/>:<div>loading data</div>}
         <Policy/>
         <div className="flex flex-wrap gap-4 justify-evenly bg-gray-200 p-4 mt-8 mb-20">
                <ContactForm/>
                <ContactImage/>
            </div>
            <Subscribe/>
        </div>
        
     );
}

export default Home;