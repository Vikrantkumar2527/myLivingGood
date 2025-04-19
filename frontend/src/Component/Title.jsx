import React from 'react';
function Title({text1,text2}) {
    return ( 
        <div className='text-center w-full my-12'>
            <div className='flex gap-2 justify-center items-center'>
                <div className='text-gray-500'>{text1}</div>
                <div className='text-black font-semibold'>{text2}</div>
                <div className='h-[2px] w-[20px] bg-black'></div>
            </div>
            <div className='text-gray-500'>
            Discover what everyone’s loving – our most wanted styles, all in one place.
            </div>
        </div>
     );
}

export default Title;