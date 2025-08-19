import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
function Facility({facility}) {
    return ( 
        <div className=' flex gap-2 items-center'>
            <img className='' src={assets.facility} alt="" />
             <p>{facility}</p>
        </div>
     );
}

export default Facility;