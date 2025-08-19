import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
function Footer() {
    return ( 
        <>
        <div className='Footer mx-3 mt-16 flex flex-col  sm:grid  grid-cols-[2fr,1fr,1fr] gap-4 sm:gap-16'>
            <div className='p-4'>
                <img className='h-16 w-24' src={assets.logo} alt="" />
                <p className='text-base text-gray-500'>MyLivingGood is your trusted partner for finding safe, comfortable, and affordable student accommodation. We connect students with verified housing options, making the transition to campus life easier and stress-free.</p>
            </div>
            <div className='p-4'>
                <p className='mb-5 font-semibold'>COMPANY</p>
                <div className='text-sm font-base'>
                    <a href="/"><p className='mb-2 text-gray-500 text-blue-800'>Home</p></a>
                    <a href="/about"><p className='mb-2 text-gray-500 text-blue-800'>About us</p></a>
                    <a href="/connect"><p className='mb-2 text-gray-500 text-blue-800'>Contact</p></a>
                    <a href=""><p className='mb-2 text-gray-500'>Privacy Policy</p></a>
                    
                </div>
            </div>
            <div className=' p-4'>
                <p className='mb-4 font-semibold'>GET IN TOUCH</p>
                <div className='font-base'>
                    <p className=' mb-2 text-base text-gray-500'>+91-9651509940</p>
                    <p className=' mb-2 text-base text-gray-500'>+91-8726476957</p>
                    <p className=' mb-2 text-base text-gray-500'>contactus@mylivinggood.com</p>
                </div>
            </div>

        </div>
        
        <div className='w-full h-[1px] bg-black my-4'></div>
        <p className='text-center font-light text-xs mb-4'>Copyright 2025 @ My Living Good-All Right Reserved.<span className='pavi  prata-regular'>&nbsp;&nbsp;PAVI&nbsp;&nbsp;</span><i class="text-red-600 fa-solid fa-heart"></i></p>
        </>
        
     );
}

export default Footer;