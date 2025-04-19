import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
function Footer() {
    return ( 
        <>
        <div className='Footer mx-3 mt-32 flex flex-col  sm:grid  grid-cols-[2fr,1fr,1fr] gap-4 sm:gap-16'>
            <div className='p-4'>
                <img className='h-8 w-24' src={assets.logo} alt="" />
                <p className='text-base text-gray-500'>At Forever, we believe fashion is more than just clothing — it's a statement. Our collections are designed to inspire confidence, embrace individuality, and stand the test of time. From everyday essentials to bold new trends, we re here to help you express your unique style. Crafted with care, worn with pride — that s Forever.</p>
            </div>
            <div className='p-4'>
                <p className='mb-5 font-semibold'>COMPANY</p>
                <div className='text-sm font-base'>
                    <p className='mb-2 text-gray-500 '>Home</p>
                    <p className='mb-2 text-gray-500'>About us</p>
                    <p className='mb-2 text-gray-500'>Delivery</p>
                    <p className='mb-2 text-gray-500'>Privacy Policy</p>
                </div>
            </div>
            <div className=' p-4'>
                <p className='mb-4 font-semibold'>GET IN TOUCH</p>
                <div className='font-base'>
                    <p className=' mb-2 text-base text-gray-500'>+91 7906004699</p>
                    <p className=' mb-2 text-base text-gray-500'>+91 8299349689</p>
                    <p className=' mb-2 text-base text-gray-500'>utonwork@gmail.com</p>
                </div>
            </div>

        </div>
        
        <div className='w-full h-[1px] bg-black my-4'></div>
        <p className='text-center font-light text-xs mb-4'>Copyright 2025 @ FOREVER-All Right Reserved.<span className='pavi font-[900] prata-regular'>&nbsp;&nbsp;PAVI&nbsp;&nbsp;</span><i class="fa-solid fa-heart"></i></p>
        </>
        
     );
}

export default Footer;