import React, { useContext,useEffect,useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { ShopContext } from '../../context/shopContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Upperpart({image,productdetails,UpdateImage,productId}) {
    const {currency,cartItems,setCartItems,backendUrl,countCartItem,token,importCart}=useContext(ShopContext);
    const [size,setSize]=useState("");
    const navigate=useNavigate();
     
    // add to carts function

    async function addToCart(productId,size){
        
        try {
           
            const response=await axios.post(backendUrl+"/api/cart/addcart",{productId,size},{headers:{token}})
            if(response.data.message==="You are not Login"){
                navigate("/login")
            }
            if(response.data.success){
               
               importCart();
            }else{
                return toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
        // let cartItemsCopy=structuredClone(cartItems);
        // if(!size){
        //     toast.error("please select the size");
        //     return;
        // }
        // if(cartItemsCopy[productId]){
        //     if(cartItemsCopy[productId][size]){
        //         cartItemsCopy[productId][size]+=1
        //     }else{
        //         cartItemsCopy[productId][size]=1;
        //     }
        // }
        // else{
        //     cartItemsCopy[productId]={};
        //     cartItemsCopy[productId][size]=1;
        // }
        // setCartItems(cartItemsCopy);
    }
 
  useEffect(()=>{
    countCartItem();
  },[cartItems])



    return ( 
        <>
        <div className='flex flex-col sm:flex-row p-2 gap-4 w-full'>
            <div className='flex flex-row w-full sm:w-2/3'>
                <div className='flex flex-col gap-2 h-full'>
                    {productdetails.image.map((ele,idx)=>(
                        <img onClick={()=>UpdateImage(ele)}  className='w-28 h-[60px] sm:h-28' key={idx} src={ele} alt="" />
                    ))}
                </div>
                <div className='mx-2 h-full'>
                    <img className='h-full' src={image} alt=""/>
                </div>

            </div>
            <div className=' p-3'>
                <p className='text-xl font-semibold'>{productdetails.name}</p>
                <div className='flex mt-2 text-center items-center'>
                    <img className='h-3 w-3 mr-1' src={assets.star_icon} alt="" />
                    <img className='h-3 w-3 mr-1'src={assets.star_icon} alt="" />
                    <img className='h-3 w-3 mr-1'src={assets.star_icon} alt="" />
                    <img className='h-3 w-3 mr-1'src={assets.star_icon} alt="" />
                    <img className='h-3 w-3 mr-1'src={assets.star_dull_icon} alt="" />
                    <p className=''>&nbsp;&nbsp;(122)</p>
                </div>
                <p className='mt-1 font-semibold text-lg' >{currency}{productdetails.price}</p>
                <p className='mt-4 text-gray-600'>{productdetails.description}</p>
                <p className='mt-4 text-lg font-base'>Select Size</p>
                <div className='size flex'>
                    {productdetails.size.map((ele,idx)=>(
                        <p onClick={()=>setSize(ele)} key={idx} className={`border mt-4 mr-3 py-2 px-4 bg-gray-100 ${ele===size?"border-orange-500":""} `}>{ele}</p>
                    ))}
                </div>
                <button onClick={()=>addToCart(productId,size)} className='bg-black py-2 px-6 mt-4 text-[10px] text-white'>ADD TO CART</button>
                <hr className='mt-4 '/>
                <div className='mt-4'>
                    <p className='text-sm font-light '>100% Original product.</p>
                    <p className='text-sm font-light '>Cash on delivery is available on this product.</p>
                    <p className='text-sm font-light '>Easy return and exhange policy within 7 days.</p>
                </div>
                
            </div>
        </div>
        <div className='description'>
            <div className='flex mt-4'>
                <p className='border p-2 text-sm font-semibold'>Description</p>
                <p className='border p-2 text-sm text-gray-400'>Reviews(122)</p>
            </div>
            <div className='border mt-3 px-3 py-6 text-gray-500 text-sm'>
                <p>Had a great experience! The ordering process was smooth, and the delivery was quicker than expected. The quality exceeded my expectations, and everything was well-packaged. Customer support was responsive and helpful. Will definitely order again!</p>
                <p className='mt-4'>I was a bit skeptical at first, but I'm really happy with my purchase. The service was professional, and the product matched the description perfectly. Delivery was on time, and the packaging was secure. Would definitely recommend to others!</p>
            </div>
            
        </div>
        </>
     );
}

export default Upperpart;