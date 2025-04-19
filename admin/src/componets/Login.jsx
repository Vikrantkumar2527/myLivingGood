 import axois from "axios"
 import React, { useState } from 'react';
import { backendUrl } from "../App";
import { toast } from "react-toastify";
 
 function Login({setToken}) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
 //from submit handler 
   const onSubmitHandle=async(e)=>{
      e.preventDefault();
      try {
        const response=await axois.post(backendUrl+'/api/user/admin',{email,password})
        if(response.data.success){
            toast.success("Login Succesfully");
            const token=response.data.token
            setToken(token)
        }
        else{
            toast.error("Invalid credentials")
        }
      } catch (error) {
        console.log(error)
      }
     
   }
    
  
    return ( 
        <div className='login border min-h-screen flex items-center justify-center'>
            
            
            <div className='w-80 p-4 border shadow-md bg-white rounded-md'>
            <h1 className='text-2xl font-semibold text-center' >Admin Panel</h1>
            <form onSubmit={onSubmitHandle}>
                <div className='mt-3'>
                    <p className='text-sm font-[500] mb-1'>Email Address</p>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className='w-full outline-none text-sm border p-2' required type="email" placeholder='Email@google.com' />
                </div>
                <div className='mt-3'>
                    <p className='text-sm font-[500] mb-1'>Password</p>
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className='w-full outline-none text-sm border p-2' required type="password" placeholder='Enter Your password' />
                </div>
                <button className='w-full bg-black text-white rounded-md p-1 mt-2'>Login</button>
            </form>
            </div>
        </div>
     );
 }
 
 export default Login;