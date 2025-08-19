import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from 'axios'
// import { products } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/shopContext';
import Product from './Product';

function LatestCollection({products,currency}) {
        
        const latestProperty=products.slice(0,3);
        
        
        return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mx-3'>
            {latestProperty.map((ele,idx)=>(
               <Product key={idx} id={ele._id} name={ele.name} location={ele.location}  currency={currency} image={ele.image[0]} price={ele.priceTwoSetter}/>
            
          ))}
    
        </div>
          
            
         );
    
}

export default LatestCollection;