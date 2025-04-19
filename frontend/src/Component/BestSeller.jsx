import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Product from './Product';
function BestSeller() {
    const {products,currency}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
        const arr=products.filter((ele)=>(ele.bestseller))
        setBestSeller(arr.slice(0,5))
        
    },[products]);
    return ( 
        <div className='mx-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {bestSeller.map((ele,idx)=>(
                <Product key={idx} image={ele.image[0]} name={ele.name} id={ele._id} currency={currency} price={ele.price}/>
            ))}
        </div>
     );
}

export default BestSeller;