import React, { useContext ,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import Detailing from "../Component/Detailing"

function Productdetails() {
    const {productId}=useParams();
    const {currency,products}=useContext(ShopContext);

    const productdetail=products.filter((ele)=>ele._id==productId);

    return productdetail.length>0 ? ( 
       <div className='product-detail mt-28 border'>
           <Detailing info={productdetail[0]} currency={currency}/>
       </div>
     ): (
        <div >
         No Data found
        </div>
     )
}

export default Productdetails;