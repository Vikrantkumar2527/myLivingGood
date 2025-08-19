import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

function Search() {
    const location=useLocation();
    const {showSearch,setShowSearch,search,setSearch}=useContext(ShopContext);
    return showSearch && location.pathname==="/collection" ?(
        <div className=' bg-gray-100  border-t border-b border-black ml-5 mr-3  mt-28 p-5 w-full text-center'>
        <div className='inline-flex justify-center items-center border border-black  rounded-full sm:w-1/2 px-4'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='p-1 bg-gray-100 outline-none flex-1 text-sm sm:text-base' type="text" placeholder='Search by Name of the products'/>
            <img className='w-4 h-4' src={assets.search_icon} alt="Seach"/>
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline ml-2 mb-1 w-4 h-4' src={assets.cross_icon} alt="Cross Icon" />
        </div> 
     ):null
}

export default Search;