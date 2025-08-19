import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { toast } from 'react-toastify';
function Comment({productId,setComments}) {
    const {backendUrl,user,token}=useContext(ShopContext);
    console.log(token)
    const [text,setText]=useState("");
     async function onSubmit(event){
        event.preventDefault();
        const response=await axios.post(backendUrl+`/api/product/${productId}/comment`,{text,user},{ headers: { token } })
        if(response.data.success){
            
            setText("")
            setComments(response.data.comments)
          
        }else{
            toast.error(response.data.message)
        }
        

    }
    return ( 
        <>
        {
            token && token!=""?
        
        <div className='m-4 sm:w-[50%] w-[70%]'>
            <form onSubmit={onSubmit}>
                <textarea onChange={(e)=>setText(e.target.value)} className='border text-[20px] text-[gray] border-black w-full p-4 rounded' rows={5} value={text}  placeholder='COMMENT HERE'></textarea>
                <br />
                <button className='border bg-orange-500 text-white px-4 py-2 rounded'>Submit</button>
            </form>
        </div>
        :<div className='text-red-500 font-bold text-xl ml-5'>
            Need login to comment
        </div>
}
        </> 
        
    )
}

export default Comment;