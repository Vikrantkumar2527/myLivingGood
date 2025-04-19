import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

function Policy() {
    return ( 
        <div className='my-20 sm:mt-32 px-8 flex flex-col sm:flex-row justify-around gap-10 items-center'>
            <div className='flex flex-col justify-center items-center'>
                <img className='h-8 w-8 ' src={assets.exchange_icon} alt="" />
                <p className='font-semibold text-small sm:text-base'>Easy Exchange Policy</p>
                <p className='text-gray-400 text-small sm:text-base'>We offer hassle free exchange policy</p>
            </div>
            <div className='flex flex-col justify-center items-center' >
                <img className='h-8 w-8 ' src={assets.quality_icon} alt="" />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-400'>We provide 7 days free return policy</p>
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