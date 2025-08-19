import axios from "axios";
import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function Login() {
  const navigate=useNavigate()
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {backendUrl,token,setToken,user,setUser,setId}=useContext(ShopContext)
    console.log(backendUrl);
    
    const [status,setStatus]=useState('login')
    async function handleSubmit(e){
      try {
        e.preventDefault();
        if(status==='signUp'){
          const response=await axios.post(backendUrl+"/api/user/register",{username,email,password})
          if(response.data.success){
            popInput("Enter Code")
            function popInput(message){
              Swal.fire({
                title: `${message}`,
                text:"Code is Valid for 5 Min only",
                input: 'text', // input box create hota hai
                confirmButtonText: 'Submit',
                preConfirm: async (code) => {
                  //Yahan 'code' me wahi string aayegi jo user ne input box me likhi hogi
                  if (!code) {
                    return popInput("Enter Code before submit")
                  }
                  const response=await axios.post(backendUrl+`/api/user/verify/${email}`,{code})
                  if(response.data.message=="otp is incorrect"){
                   return popInput("Incorrect Code")
                  }
                  if(!response.data.success){
                   return Swal.fire({
                      title:"Error Occur",
                      text:`${response.data.message}`,
                      icon:"error"
                    })
                  }
                  Swal.fire({
                    title:"Success",
                    text:`${response.data.message}`,
                    icon:"success"
                  })
                  const tokeen=response.data.token
                  const userN=response.data.username;
                  const id=response.data.id;
                  setId(id);
                  localStorage.setItem("id",id);
                  setToken(tokeen)
                  localStorage.setItem("token",tokeen)
                  setUser(userN)
                  localStorage.setItem("user",userN)
                  navigate("/")
                  
                }
              });
               
            }
          
            
          }else{
            toast.error(response.data.message)
          }
            
          
        }


        //login condition
        //login condition
        //login condition
        //login condition
        else{
          const response=await axios.post(backendUrl+"/api/user/login",{email,password})
          if(response.data.success){
            toast.success(`${response.data.message}`)
            const tokeen=response.data.token
            const userN=response.data.username;
            setId(response.data.id);
            setToken(tokeen)
            localStorage.setItem("token",tokeen)
            setUser(userN)
            localStorage.setItem("user",userN)
            navigate("/")
            
          }else{
            toast.error(`${response.data.message}`)
          }
        }
      } 
      //error handling for login and signup
      catch (error) {
        console.log(error)
        toast.error(error.message)
        
      }
        
    }
   
  return (
    <form onSubmit={handleSubmit}>
    <div className="mt-16 flex items-center justify-center w-full">
      <div className="w-2/3 md:w-1/4 p-2 my-8 ">
        <div className=" flex gap-2 items-center justify-center my-4">
          <p className={`prata-regular text-[34px] ${status==='login'?'block':'hidden'} `}>Login</p>
          <p className={`prata-regular text-[34px] ${status==='signUp'?'block':'hidden'} `}>SignUp</p>
          <div className="w-[45px] h-[1px] bg-black"></div>
        </div>
        <div className={`mb-2 ${status==='login'?'hidden':'block'}`}>
            <input
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                className="outline-none border text-sm p-2 border-black w-full"
                type="text"
                placeholder="Username"
            />  
        </div>  
        <div className="mb-2">
            <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                className="outline-none border text-sm p-2 border-black w-full"
                type="email" required
                placeholder="Email"
            />  
        </div>      
        
        <div>
            <input
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                className="outline-none border text-sm p-2 border-black w-full"
                type="password" required
                placeholder="Password"
            />
        </div>
        <div className="flex justify-between mt-4">
            <p className="text-gray-500 text-[12px]"><span className={`${status==='login'?'block':'hidden'}`}>Forgot your Password?</span></p>
            <p onClick={()=>setStatus("signUp")} className={`text-gray-500 text-[12px] cursor-pointer ${status==='login'?'block':'hidden'}`}>Create account</p>
            <p onClick={()=>setStatus("login")} className={`text-gray-500 text-[12px] cursor-pointer ${status==='signUp'?'block':'hidden'}`}>Aready had a Account</p>
        </div>
        <div className="flex justify-center mt-5">
            <button className={`bg-black text-white text-sm px-6 py-1 ${status==='login'?'block':'hidden'}`}>Sign in</button>
            <button className={`bg-black text-white text-sm px-6 py-1 ${status==='signUp'?'block':'hidden'}`}>Create</button>
        </div>
        <a href={`https://mylivinggood-backend.onrender.com/auth/google`}>
        <div className="border border-black flex p-2 items-center gap-6 rounded mt-4 cursor-pointer">
          <i class="fa-brands fa-google"></i>
          <p>Continue with google</p>
        </div>   
        </a>
        <a href={`https://mylivinggood-backend.onrender.com/facebook`}>
          <div className="border border-black flex p-2 items-center gap-6 rounded mt-4 cursor-pointer">
            <i class="text-[#1877F2] mt-1 fa-brands fa-square-facebook"></i>
            <p className="text-[#1877F2]">Continue with Facebook</p>
          </div>
        </a>
      </div>
    </div>
    </form>
  );
}

export default Login;
