import React from 'react';
import { Link } from 'react-router-dom';
function Product({id,name,image,price,currency}) {
    return ( 
        <>
        <Link to={`/products/${id}`}>
                <img className='transition delay-150 duration-300 ease-in-out hover:scale-105' src={image} alt="" />
                <div className='text-[12px] py-2'>{name}</div>
                <div className='text-[12px] font-semibold'>{currency}{price}</div>
         </Link>
        </>
     );
}

export default Product;