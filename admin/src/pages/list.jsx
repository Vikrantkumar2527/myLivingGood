
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import Swal from "sweetalert2"

function List({token}) {
    const [products,setProducts]=useState([])

    const deleteItem=async(id)=>{
        try {
            const response=await axios.post(backendUrl+"/api/product/delete",{id},{headers:{token}})
            if(response.data.success){
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                  );
                  listProduct();
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
        
    }
     
    function handleClick(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
          }).then((result)=>{
             if(result.isConfirmed){
                deleteItem(id)
               
             }
          })
    }
    const listProduct=async()=>{
        try {
            const response=await axios.get(backendUrl+"/api/product/collection")
            if(response.data.success){
                const items=response.data.products
                setProducts(items);
                
            }else{
                toast.error(response.data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        listProduct();
    },[])
    return ( 
        <div className='list p-5  w-full'>
            <h1 className='text-3xl text-center'>All Product-</h1>
            <table className='w-full mt-4'>
                <thead>
                <tr>
                    <th className='w-[15%]  font-semibold text-sm sm:text-2xl text-pink-400'>Image</th>
                    <th className='w-[40%] font-semibold text-sm sm:text-2xl text-pink-400'>Name</th>
                    <th className='w-[15%] font-semibold text-sm sm:text-2xl text-pink-400 '>Category</th>
                    <th className='w-[15%] font-semibold text-sm sm:text-2xl text-pink-400'>Price</th>
                    <th className='w-[15%] font-semibold text-sm sm:text-2xl text-pink-400'>Action</th>
                </tr>
                </thead>
                {products.map((ele,idx)=>{
                    return <tbody key={idx}>
                            <tr className='text-center'>
                                <td ><img   src={ele.image[0]} alt="Proudct image" /></td>
                                <td className='text-[8px] p-1 sm:text-lg'>{ele.name}</td>
                                <td className='text-[8px] p-1 sm:text-lg'>{ele.category}</td>
                                <td className='text-[8px] p-1 sm:text-lg'>{currency}{ele.price}</td>
                                <td onClick={()=>handleClick(ele._id)} className='text-[8px] p-1 sm:text-2xl cursor-pointer'>X</td>
                            </tr>
                    </tbody>
                })}
            </table>
        </div>
        
     );
}

export default List;