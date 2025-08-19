import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

function Policy() {
    return ( 
        <div className='my-20 sm:mt-32 px-8 flex flex-col sm:flex-row justify-around gap-10 items-center'>
            <div className='flex flex-col justify-center items-center'>
                <img className='h-8 w-8 ' src={assets.exchange_icon} alt="" />
                <p className='font-semibold text-small sm:text-base'>Quick & Easy Booking</p>
                <p className='text-gray-400 text-small sm:text-base'>Search, compare, and book your stay online hassle-free.</p>
            </div>
            <div className='flex flex-col justify-center items-center' >
                <img className='h-8 w-8 ' src={assets.quality_icon} alt="" />
                <p className='font-semibold'>Trusted by Students</p>
                <p className='text-gray-400'>Already helping thousands of students find their second home.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className='h-8 w-8 ' src={assets.support_img} alt="" />
                <p className='font-semibold'>Best Customer Support</p>
                <p className='text-gray-400'>Provide 24/7 customer support</p>
            </div>
            
        </div>
     );
}

export default Policy;