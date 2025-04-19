import React from 'react';

function Subscribe() {
    const handleonSubmit= (event)=>{
        event.preventdefault();
    }
    return ( 
        <div className='text-center my-4'>
            <p className='text-md sm:text-xl m-2 font-semibold'>Subscribe now & get 20% off</p>
            <p className='text-gray-300 text-xs sm:text-sm m-2'>Subscribe now and stay ahead with the latest drops, exclusive deals, and timeless style from Forever. </p>
            <form onSubmit={handleonSubmit}  className='m-2 w-full'>
                <input required className='w-1/2 text-sm outline-none border p-2' type="email" placeholder='Enter your email id' />
                <button className='bg-black text-white text-[10px] text-center py-3 px-5'>SUBSCRIBE</button>
            </form>
        </div>
     );
}

export default Subscribe;