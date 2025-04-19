import { createContext, use, useEffect, useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
const ShopContext=createContext();

const ShopContextProvider= (props)=>{
    const [products,setProduct]=useState([]);
    const [showSearch,setShowSearch]=useState(false);
    const [search,setSearch]=useState("");
    const [cartItems,setCartItems]=useState({});
    const [cartCount,setCartCount]=useState(0);
    const [cartData,setCartData]=useState([]);
    const [paise,setPaise]=useState(0);
    const [user,setUser]=useState(localStorage.getItem("user")?localStorage.getItem("user"):"");
    const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");
    const currency="$";
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const importProudct=async()=>{
        try {
            const response=await axios.get(backendUrl+"/api/product/collection")
            if(response.data.success){
                setProduct(response.data.products)
            }
            else{
                toast.error(response.data.message)
            }
        } catch (error) {
            
            toast.error(error.message)
        }
        
    }

    //import cart details for particular user

    const importCart=async()=>{
        try {
            
            const response=await axios.get(backendUrl+"/api/cart/getcart",{headers:{token}})
            const cart=response.data.cartDetail
            setCartItems(cart);
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        token && importCart()
    },[token])

    useEffect(()=>{
        importProudct()
    },[])

    const shippingCharge=10;
       function countCartItem(){
            let value=0;
            for(const id in cartItems){
                for(const sz in cartItems[id]){
                    if(cartItems[id][sz]>0){
                        value+=cartItems[id][sz];
                    }
                }
            }
            return setCartCount(value);
        }


        //calculating total bill price

        function billCal(){
            let value=0;
            for(const id in cartItems){
                for(const sz in cartItems[id]){
                    if(cartItems[id][sz]>0){
                        const item=products.find((pro)=>pro._id===id)
                        if(item){
                            let price=item.price
                            value+=(price*cartItems[id][sz])
                        }
                       
                    }
                }
            }
            setPaise(value)
    }

    useEffect(()=>{
       if(token && Object.keys(cartItems).length>0){
         billCal()
       }
    },[cartItems])

    
    
    const value={
        products,currency,shippingCharge,showSearch,setShowSearch,search,setSearch,cartItems,setCartItems,cartCount,setCartCount,countCartItem,cartData,setCartData,billCal,backendUrl,token,setToken,user,setUser,importCart,paise
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    );
}
export  {ShopContextProvider,ShopContext};