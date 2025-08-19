import React from "react";
import Title1 from "../Component/Title1";
import { assets } from "../assets/frontend_assets/assets";
import Subscribe from "../Component/Subscribe";
import ContactForm from "../Component/ContactForm";
import ContactImage from "../Component/ContactImage";
function Connect() {
    return ( 
        <div className="mt-36">
            <div className="flex justify-center">
                <Title1 text1={'CONTACT'} text2={'US'}/>
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly bg-gray-200 p-4 mt-8">
                <ContactForm/>
                <ContactImage/>
            </div>
            <div className="mt-24"><Subscribe/></div>
            
          
        </div>
     );
}

export default Connect;