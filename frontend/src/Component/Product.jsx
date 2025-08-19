import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "./product.css"
import { Link } from 'react-router-dom';
function Product({id,name,image,price,currency,location}) {
    const navigate=useNavigate();
    return ( 
        <div className='product  h-[250px] md:h-[450px]'>
        <Link to={`/products/${id}`} target="_blank" rel="noopener noreferrer">
                <img className='p-img w-[100%] h-[50%]' src={image} alt="" />
                <div className='p-name mb-3 text-[12px] md:text-[20px] py-2'>{name}</div>
                <div className='p-location mb-3 text-[10px] md:text-[20px]'>
                    <i class="fa-solid fa-location-dot"></i>
                    &nbsp;&nbsp;&nbsp;
                    <span className='text-[13px] sm:text-[20px]'>{location}</span>
                </div>
                <div className='h-line mb-3  h-[2px] md:h-[3px]' ></div>
                <div className='text-[12px] mb-3 md:text-[20px]  font-bold'>Starting from {currency} {price}  TwoSeater</div>
                <button className='btn-one p-[10px] px-[15px] mr-4 hidden md:inline'>Schedule A Visit</button>
         </Link>
        
                    
                    <button onClick={()=>navigate("/connect")} className='btn-two p-[10px] hidden md:inline'>Get contact number</button>
                
         </div>
    
     );
}

export default Product;