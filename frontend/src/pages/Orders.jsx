import React, { useContext, useEffect, useState } from 'react';
import Title1 from '../Component/Title1';
import { ShopContext } from '../context/shopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Orders() {
    const {products,currency,backendUrl,token}=useContext(ShopContext);
    const [orders,setOrders]=useState([]);

    async function fetchOrder(){
        try {
            if(!token){
                return null
            }
            const response=await axios.post(backendUrl+"/api/order/userorders",{},{headers:{token}})
            if(response.data.success){
                const orderData=response.data.orderData
                setOrders(orderData)

            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        fetchOrder()
    },[])
    
    return ( 
        <div className='mx-8 my-6'>
            <Title1 text1={"MY"} text2={"ORDERS"}/>
            {
                orders.reverse().map((ele,idx)=>{
                    return <div className='border border-black p-2 my-2 flex justify-between' key={idx}>
                        <div className='flex flex-col md:flex-row '>
                             <img className='w-32 h-32 mr-3' src={ele.image[0]} alt="" />
                             <div className='flex flex-col justify-evenly h-40'>
                                <p className='font-semibold'>{ele.name}</p>
                                <div className='flex gap-2 text-gray-500'>
                                    <p>{currency}{ele.price}</p>
                                    <p>Quantity: {ele.quantity}</p>
                                    <p>Size: {ele.orderSize}</p>
                                </div>
                                <p>Date: <span className='text-gray-500'>{new Date(Number(ele.date)).toString().split("GMT")[0]}</span></p>
                                <p>Payment Method: {ele.paymentMethod}</p>
                             </div>
                        </div>
                        <div className='flex flex-col sm:flex-row  w-[40%] justify-center gap-6 sm:gap-0  sm:justify-between p-2'>
                        <div className='flex items-center '>
                            <div className='h-3 w-3 rounded-full bg-green-500 mr-2'></div>
                            <p className='text-[10px] sm:text-xl'>{ele.status}</p>
                        </div>
                        <div className='flex items-center '>
                            <button onClick={()=>fetchOrder()} className='border text-[10px] p-2 rounded hover:bg-black hover:text-white'>Trace Order</button>
                        </div>
                        </div>
                        
                       
                    </div>
                })
            }
        </div>
     );
}

export default Orders;