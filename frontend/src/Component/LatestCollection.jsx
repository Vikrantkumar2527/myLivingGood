import React from 'react';
import { useContext } from 'react';

import { ShopContext } from '../context/shopContext';
import Product from './Product';
function LatestCollection() {
        const {products,currency}=useContext(ShopContext);
        const latestCollection=products.slice(0,10);
        
        return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-3'>
            {latestCollection.map((ele,idx)=>(
               <Product key={idx} id={ele._id} name={ele.name}  currency={currency} image={ele.image[0]} price={ele.price}/>
            
          ))}
    
        </div>
          
            
         );
    
}

export default LatestCollection;