import React, { useContext, useEffect, useState } from 'react';

import Title1 from "../Title1"
import { ShopContext } from '../../context/shopContext';
import Product from '../Product';
function RelatedProduct({productdetail}) {
    const {products,currency}=useContext(ShopContext);
    const [related,setRelated]=useState([]);
    function searchRelateprod(){
        let prodCopy=[...products];
        prodCopy=prodCopy.filter((ele)=>ele.category===productdetail.category)
        prodCopy=prodCopy.filter((ele)=>ele.subCategory===productdetail.subCategory)
        prodCopy=prodCopy.slice(0,5);
        setRelated(prodCopy);
    }
    useEffect(()=>{
        searchRelateprod();
    },[])
    return ( 
        <>
        <div className='flex flex-col justify-center items-center mt-4'>
            <Title1 text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-5'>
            {related.map((ele,idx)=>(
                // id,name,image,price,currency
                <Product key={idx} id={ele._id} name={ele.name} image={ele.image[0]} price={ele.price} currency={currency}/>
            ))}
        </div>
        </>
     );
}

export default RelatedProduct;