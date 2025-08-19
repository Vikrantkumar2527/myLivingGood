import React from 'react';
import { assets } from "../assets/frontend_assets/assets";
function ContactImage() {
    return ( 
        <div className='w-[100%] sm:w-[50%]'>
            <img className='rounded' src={assets.hostel} alt="" />
            <div className='text-center mt-2 text-orange-700 font-semibold text-lg'>
                <p><i class="fa-solid fa-envelope"></i> contactus@mylivinggood.com</p>
                <p><i class="fa-solid fa-phone"></i>+91-9651509940</p>
                <p><i class="fa-solid fa-phone"></i>+91-8726476957</p>
            </div>
        </div>
     );
}

export default ContactImage;