import React from 'react';
function AboutImage({classextra,text}) {
    return ( 
        <div className='border rounded bg-gray-200 p-4'>
            <i className={`fa-solid fa-${classextra} text-[50px] text-orange-700`}></i>
            <p className='font-light mt-2'>{text}</p>
        </div>
     );
}

export default AboutImage;