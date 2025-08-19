import { createContext, use, useEffect, useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
const ShopContext=createContext();

const ShopContextProvider= (props)=>{
    const [products,setProduct]=useState([]);
    const [showSearch,setShowSearch]=useState(false);
    const [search,setSearch]=useState("");
    const [user,setUser]=useState(localStorage.getItem("user")?localStorage.getItem("user"):"");
    const [id,setId]=useState(localStorage.getItem("id")?localStorage.getItem("id"):"");
    const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");
    const currency="₹";
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const importProduct=async()=>{
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

    useEffect(()=>{
        importProduct();
    },[])


    
    
    const value={
        id,setId,importProduct,products,currency,showSearch,setShowSearch,search,setSearch,backendUrl,token,setToken,user,setUser
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    );
}
export  {ShopContextProvider,ShopContext};