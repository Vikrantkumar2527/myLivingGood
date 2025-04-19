import React from 'react';

import { NavLink } from 'react-router-dom';
import { assets } from '../admin_assets/assets';
function SlideBar() {
    return ( 
        <div className='w-16 sm:w-60 min-h-screen border'>
            
            <div className='flex flex-col gap-4 ml-2 sm:ml-12 mt-8'>

                <NavLink to="/add">
                 <div className='flex  gap-3 items-center border p-2 '>
                    
                    <img className='h-5 w-5' src={assets.add_icon} alt="add Icon" />
                    <p className='text-sm hidden sm:block'>Add Items</p>
                 </div>
                 </NavLink>
                 <NavLink to="/list">
                 <div className='flex  gap-3 items-center border p-2 '>
                    
                    <img className='h-5 w-5' src={assets.order_icon} alt="" />
                    <p className='text-sm hidden sm:block'>List Items</p>
                 </div>
                 </NavLink>
                 <NavLink to="/orders">
                 <div className='flex  gap-3 items-center border p-2 '>
                    
                    <img className='h-5 w-5' src={assets.order_icon} alt="add Icon" />
                    <p className='text-sm hidden sm:block'>Orders</p>
                 </div>
                 </NavLink>
            </div> 
            
            
        </div>
     );
}

export default SlideBar;