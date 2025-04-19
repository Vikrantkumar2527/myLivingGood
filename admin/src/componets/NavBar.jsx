

import React from 'react';
import {assets} from "../admin_assets/assets"
function NavBar({setToken}) {
    return ( 
        <div className='flex justify-between items-center border px-4 pb-4 bg-white fixed top-0 w-[100%]'>
            <img className='h-20 w-36' src={assets.logo} alt="Logoimage" />
            <div className='flex items-center gap-3'>
                <div className='rounded-full h-8 w-8 border border-gray-500 text-center pt-1 bg-red-500 cursor-pointer text-white'>VK </div>
                <button onClick={()=>setToken("")} className='border bg-gray-500    rounded-full h-8 w-20 text-white text-sm'>Logout</button>
            </div>
           
        </div>
     );
}

export default NavBar;