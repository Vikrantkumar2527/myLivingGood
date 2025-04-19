import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import { backendUrl,currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../admin_assets/assets';

function Orders({token}) {

    const [orders,setOrders]=useState([]);
    
        async function fetchOrders() {
            if(!token){
                return null
            }
            const response=await axios.get(backendUrl+"/api/order/getorders",{headers:{token}})
            if(response.data.orders){
                setOrders(response.data.orders)

            }else{
                toast.error(response.data.message)
            }
        }
        useEffect(()=>{
            fetchOrders()
        },[])

        //handle onChange
        async function handleOnChange(event,orderid){
            try {
                const status=event.target.value
                const response=await axios.post(backendUrl+"/api/order/update",{status,orderid},{headers:{token}})
                if(response.data.success){
                     fetchOrders()
                }else{
                    toast.error(response.data.message)
                }

                
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
           
        }
        
    return ( 
        <>
         
         <div className='m-4 w-[70%]'>
            <h1 className='mb-4 text-center text-xl font-bold'>Order Page</h1>
            {orders.map((order,idx)=>(
                <div className='p-2 sm:p-4 border grid grid-cols-[2fr_1.5fr_1fr] sm:grid-cols-[0.5fr_2fr_1.5fr_0.5fr_1fr] gap-2 sm:gap-5 p-2 mb-2' key={idx}>

                    {/* 1 coloumn */}
                    <img className='h-12 s-12  hidden sm:block' src={assets.parcel_icon} alt="" />

                    {/* 2 coloumn */}
                    <div className='itemname '>
                        <div >
                            {order.items.map((item,no)=>(
                               <p className='font-semibold text-sm text-pink-400' key={no}>{item.name} x {item.quantity} {item.orderSize}</p>
                            ))}
                        </div>
                        <div className='mt-2'>
                           <p className='text-sm font-semibold'><span>{order.address.name}</span> <span>{order.address.lastName}</span></p> 
                           <p className='mt-1 text-sm text-gray-500'>{order.address.street},{order.address.city},{order.address.state}</p>
                           
                           <p className='text-sm text-gray-500'>Pin Code: {order.address.zip}</p>
                           <p className='text-sm text-gray-500'>{order.address.phone}</p>
                        </div>
                    </div>

                    {/* 3rd coloumn */}
                    <div className='text-sm  sm:px-8 '>
                        <p>Items: <span className='text-gray-500'>{order.items.length}</span></p>
                        <p className='mt-3'>Method: <span className='text-gray-500'>{order.paymentMethod}</span> </p>
                        <p>Payment: {order.payment ? <span className='text-gray-500'>Done</span>:<span className='text-gray-500'>Pending</span>}</p>
                        <p>Date: <span className='text-gray-500'>{new Date(Number(order.date)).toLocaleDateString()}</span></p>
                    </div>
                    {/* 4 coloumn */}
                    <div className='text-gray-500 hidden sm:block'>
                        <p>{currency}{order.amount}</p>
                    </div>
                    {/* 5 coloumn */}
                    <div className=''>
                        <select   onChange={(event)=>handleOnChange(event,order._id)} className='text-center w-20 sm:w-32' value={order.status} id="">
                            <option value="order-placed">Order Placed</option>
                            <option value="Packed">Packed</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Out for Delivery">Out For delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>

                </div>
                )

            )}
         </div>
        </>
     );
}

export default Orders;