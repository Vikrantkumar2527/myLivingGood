import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
function BestSeller({products,currency}) {
     const arr=products.filter((ele)=>ele.trending)
    return ( 
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mx-3'>
            {arr.map((ele,idx)=>(
                <Product key={idx} image={ele.image[0]} name={ele.name} id={ele._id} currency={currency} location={ele.location} price={ele.priceTwoSetter}/>
            ))}
        </div>
        
     );
}

export default BestSeller;