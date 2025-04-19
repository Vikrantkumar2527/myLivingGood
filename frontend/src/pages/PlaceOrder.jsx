import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Title1 from "../Component/Title1";
import { ShopContext } from "../context/shopContext";
import { assets, products } from "../assets/frontend_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const [circle, setCircle] = useState("cod");
  const [items,setItmes]= useState([]);
  const [formData,setFormData]=useState({
        name:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zip:"",
        country:"",
        phone:"",

  })
  // useEffect(()=>{
  //   console.log(formData)
  // },[formData])
  

  function handleonChange(e){
    const {name,value}=e.target;
    setFormData((pre)=>({...pre,[name]:value}))
  }

  

  const {products,currency,token, paise, shippingCharge, backendUrl,cartItems,importCart } = useContext(ShopContext);

  // setup the items to send it to backend
  function convert(){
    let temp=[];
    for(let id in cartItems){
      for(let sz in cartItems[id]){
        
        if(products.length>0){
          const item=structuredClone(products.find((pro)=>pro._id===id))
          item.orderSize=sz
          item.quantity=cartItems[id][sz]
          temp.push(item)
        }else{
          return 
        }
      
         
      }
    }
   setItmes(temp) 
    

  }
  useEffect(()=>{
    convert()
  },[cartItems])


  //creating razor pay window

  const initRazor=(order)=>{

    const options={
      key:import.meta.env.VITE_RAZORPAY_ID,
      amount:order.amount,
      currency:order.currency,
      name:"Order Payment",
      description:"payment",
      order_id:order.id,
      receipt:order.receipt,
      handler:async(response)=>{
        
        try {
          const res=await axios.post(backendUrl+"/api/order/verfiyrazor",{response},{headers:{token}})
         if(res.data.success){
          importCart()
          navigate("/orders")
         }else{
          toast.error(data.message)
         }
        } catch (error) {
          console.log(error)
          toast.error(data.message)
        }
         
      }
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  }
  

  
  const navigate = useNavigate();
  async function onSubmit(e) {
      e.preventDefault();
    try {
       if(Object.keys(cartItems).length===0){
         navigate("/collection")
         return   toast.error("You cart is empty")
        }
        if(circle==="stripe"){
          toast.error("The Stripe payement is temporarily out of service")
        }
       
      if(circle==="cod"){
          const response=await axios.post(backendUrl+"/api/order/placeordercod",{items:items,amount:paise,address:formData},{headers:{token}})
          if(response.data.success){
            importCart()
            toast.success("Order-placed")
            navigate("/orders")
          }else{
            
            toast.error(response.data.message)
            
          }

      }
    } catch (error) {
       toast.error(error.message)
    }
    if(circle==="razorpay"){
      try{
         const razorResponse=await axios.post(backendUrl+"/api/order/razorpay",{items:items,amount:paise,address:formData},{headers:{token}})
         if(razorResponse.data.success){
           initRazor(razorResponse.data.order)
         }else{
           toast.error(razorResponse.success.message)
         }
          
        

      }catch{
        console.log(error)
        toast.error(error.message)
      }
    }
   
   
    
  }
  return (
    <div className="flex p-2 sm:p-8 sm:flex-row flex-col w-full gap-4">
      <div className="w-full sm:w-1/2 p-4">
        <Title1 text1={"DEVLIVERY"} text2={"INFORMATION"} />
        <form onSubmit={onSubmit} className=""> 
          <div className="flex gap-2 mt-6 w-full sm:w-2/3">
            <input onChange={handleonChange} required
              className="border  border-gray-300 rounded w-1/2  text-sm px-2 py-1"
              placeholder="First Name"
              type="text"
              name="name"
              value={formData.name}
            />
            <input  onChange={handleonChange} 
              className="border border-gray-300 rounded w-1/2  text-sm px-2 py-1"
              placeholder="Last Name Optional"
              type="text"
              name="lastName"
              value={formData.lastName}
            />
          </div>
          <div className="flex gap-2 mt-6 w-full sm:w-2/3">
            <input required onChange={handleonChange} 
              className="border border-gray-300 rounded w-full  text-sm px-2 py-1"
              placeholder="Email Address"
              type="email"
              name="email"
              value={formData.email}
            />
          </div>
          <div className="flex gap-2 mt-6 w-full sm:w-2/3">
            <input required onChange={handleonChange} 
              className="border border-gray-300 rounded w-full  text-sm px-2 py-1"
              placeholder="Street"
              type="text"
              name="street"
              value={formData.street}
            />
          </div>
          <div className="flex gap-2 mt-6 w-full sm:w-2/3">
            <input required onChange={handleonChange} 
              className="border border-gray-300 rounded w-1/2  text-sm px-2 py-1"
              placeholder="City"
              type="text"
              name="city"
              value={formData.city}
            />
            <input required onChange={handleonChange} 
              className="border border-gray-300 rounded w-1/2  text-sm px-2 py-1"
              placeholder="State"
              type="text"
              name="state"
              value={formData.state}
            />
          </div>
          <div className="flex gap-2 mt-6 w-full sm:w-2/3">
            <input  required onChange={handleonChange} 
              className="border border-gray-300 rounded w-1/2  text-sm px-2 py-1"
              placeholder="Zip Code"
              min={0}
              type="Number"
              name="zip"
              value={formData.zip}
            />
            <input required onChange={handleonChange} 
              className="border border-gray-300 rounded w-1/2  text-sm px-2 py-1"
              placeholder="Country"
              type="text"
              name="country"
              value={formData.country}
            />
          </div>
          <div className="flex gap-2 mt-6 w-full sm:w-2/3">
            <input required onChange={handleonChange} 
              className="border border-gray-300 rounded w-full  text-sm px-2 py-1"
              placeholder="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
            />
          </div>
          <div className="flex justify-end">

         
          <button className="border border-black bg-black text-white rounded px-2 py-1 mt-4">Place Order</button>
          </div>
        </form>
      </div>

      <div className="w-full sm:w-2/5  px-4 py-8">
        <Title1 text1={"CART"} text2={"TOTAL"} />
        <div className="mt-8">
          <div className="flex gap-5 sm:gap-0 sm:justify-between pb-2 border-b text-gray-500">
            <p>Subtotal</p>
            <p>
              {currency}
              {paise}
            </p>
          </div>
          <div className="flex  gap-5 sm:gap-0 sm:justify-between pb-2 border-b text-gray-500">
            <p>Shipping Fee</p>
            <p>
              {currency}
              {shippingCharge}
            </p>
          </div>
          <div className="flex  gap-5 sm:gap-0 sm:justify-between pb-2 border-b font-semibold">
            <p>Total</p>
            <p>
              {currency}
              {shippingCharge + paise}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Title1 text1={"PAYMENT"} text2={"METHOD"} />
          <div className="payment flex gap-4 mt-5">
            <div
              onClick={() => setCircle("stripe")}
              className="flex justify-start gap-2 sm:gap-5 w-[120px] p-2 items-center border border-gray-400"
            >
              <div
                className={`w-3 h-3 border border-gray-400 rounded-full ${
                  circle === "stripe" ? "bg-green-500" : ""
                }`}
              ></div>
              <img className="w-8 h-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setCircle("razorpay")}
              className="flex justify-start gap-1 sm:gap-3 w-[120px] p-2 items-center border border-gray-400"
            >
              <div
                className={`w-3 h-3 border border-gray-400 rounded-full ${
                  circle === "razorpay" ? "bg-green-500" : ""
                }`}
              ></div>
              <img
                className="w-12 sm:w-16 h-4"
                src={assets.razorpay_logo}
                alt=""
              />
            </div>
            <div
              onClick={() => setCircle("cod")}
              className="flex justify-start gap-2 w-[120px] p-2 items-center border border-gray-400"
            >
              <div
                className={`w-3 h-3 border border-gray-400 rounded-full ${
                  circle === "cod" ? "bg-green-500" : ""
                }`}
              ></div>
              <p className="text-[8px] text-gray-500">CASH ON DELIVERY</p>
            </div>
          </div>
        </div>

        {/* button div */}
        {/* <div className="w-full flex justify-end mt-12">
          <button
            onClick={handleClick}
            className="bg-black text-white px-4 py-2 rounded text-center text-sm"
          >
            place order
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default PlaceOrder;
