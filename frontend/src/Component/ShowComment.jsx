import React, { useContext } from 'react';
import axios from 'axios'
import { ShopContext } from '../context/shopContext';
function ShowComment({setComments,comments,productId}) {
    const {backendUrl,token,id}=useContext(ShopContext)
    
    const deleteComment=async (id,userId) => {
        const response=await axios.delete(backendUrl+`/api/product/deletecomment/${userId}/${productId}/${id}`,{headers:{token}});
        if(response.data.success){
            setComments(response.data.comments)
        }
    }
    return ( 
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4  m-4'>

        
        {
            comments.map((e,idx)=>{
                return(
                    <div key={idx} className='border border-black rounded p-2'>
                        <p>User: {e.user}</p>
                        <p>Comment: {e.text}</p>
                        <button onClick={()=>deleteComment(e._id,e.userId)} className={`${e.userId!=id?"hidden":"block"} text-white bg-red-500 rounded p-1 text-sm mt-2`}>DELETE</button>
                    </div>
                    
                )
            })
        }
        </div>
     );
}

export default ShowComment;