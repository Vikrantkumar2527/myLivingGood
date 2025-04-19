import React from 'react';
function Title1({text1,text2}) {
    return ( 
        <div className=' text-xl'>
            <div className='flex gap-2 items-center'>
                <div className='text-gray-500'>{text1}</div>
                <div className='text-black font-semibold'>{text2}</div>
                <div className='h-[2px] w-[40px] bg-black'></div>
            </div>
        </div>
     );
}

export default Title1;