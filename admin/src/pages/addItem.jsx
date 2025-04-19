import { useState } from "react";
import React  from "react";
import { assets } from "../admin_assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
function AddItem({token}) {
   const navigate=useNavigate();
    const [image1,setImage1]=useState(false)
    const [image2,setImage2]=useState(false)
    const [image3,setImage3]=useState(false)
    const [image4,setImage4]=useState(false)
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("MEN");
    const [subCategory,setSubCategory]=useState("TOPWEAR");
    const [price,setPrice]=useState("");
    const [size,setSize]=useState([]);
    const [bestSeller,setBestSeller]=useState(false)
    
    function handleClick(e){
        const sizze=e.target.innerText;
        setSize((pre)=>(pre.includes(sizze))?size.filter((ele)=>(ele!=sizze)):[...pre,sizze])
    }
    const handleOnSubmit= async(e)=>{
        try {
            e.preventDefault();
            if(!image1){
               return toast.error("Provide first image it is mandatory!")
            }
            if(size.length==0){
                return toast.error("Provide the Sizes");
            }

            const formData=new FormData();
            formData.append("files",image1)
            image2 && formData.append("files",image2)
            image3 && formData.append("files",image3)
            image4 && formData.append("files",image4)
            formData.append("name",name)
            formData.append("description",description)
            formData.append("category",category)
            formData.append("subCategory",subCategory)
            formData.append("price",price)
            formData.append("sizes",size)
            formData.append("bestSeller",bestSeller)
            Swal.fire({
              title: 'Adding Product...',
              text: 'Please wait',
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
              }
            });
            const response=await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}})
            Swal.close();
            
          
            if(response.data.success){
               Swal.fire('Success!', response.data.message, 'success');
               navigate("/list")
            }else{
              Swal.fire('Error!', response.data.message, 'error');
            }
        } catch (error) {
            console.log(error.message)
        }
       
    }
  return (
    <div>
    <h1 className="text-xl text-center font-bold p-3 "> Add New Product</h1>
    
    <form onSubmit={handleOnSubmit}>
    <div  className="add  w-full px-4 sm:px-12 py-4 flex flex-col gap-4 ">
      <div>
        <p className="mb-2 pl-1">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image1?assets.upload_area:URL.createObjectURL(image1)} alt="upload image" />
            <input onChange={(e)=>setImage1(e.target.files[0])}  className="hidden" type="file" id="image1"  />
          </label>

          <label htmlFor="image2">
            <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image2?assets.upload_area:URL.createObjectURL(image2)} alt="upload image" />
            <input onChange={(e)=>setImage2(e.target.files[0])} className="hidden" type="file" id="image2"/>
          </label>

          <label htmlFor="image3">
            <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image3?assets.upload_area:URL.createObjectURL(image3)} alt="upload image" />
            <input onChange={(e)=>setImage3(e.target.files[0])} className="hidden" type="file" id="image3"  />
          </label>

          <label htmlFor="image4">
            <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image4?assets.upload_area:URL.createObjectURL(image4)} alt="upload image" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" className="hidden"  />
          </label>
        </div>
      </div>


      {/* product name and Description */}
      <div>
        <p className="mb-2 pl-1" >Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} required className="w-full max-w-[475px] px-2 py-1" type="text" placeholder="Type Here"/>
      </div>
      <div>
        <p className="mb-2 pl-1" >Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description}  required className="w-full max-w-[475px] h-16 px-2 py-1" placeholder="Write Description" ></textarea>
      </div>


      <div className="flex flex-wrap gap-3  p-1">
        <div>
            <p className="text-sm mb-1">Category</p>
            <select onChange={(e)=>setCategory(e.target.value)} value={category}  required className="text-sm px-2 py-1 w-32">
                <option value="MEN">MEN</option>
                <option value="WOMEN">WOMEN</option>
                <option value="KIDS">KIDS</option>
            </select>
        </div>
        <div >
            <p className="text-sm mb-1">SubCategory</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} required className="text-sm px-2 py-1 w-32" >
                <option value="TOPWEAR">TOPWEAR</option>
                <option value="BOTTOMWEAR">BOTTOMWEAR</option>
                <option value="WINTERWEAR">VWINTERWEAR</option>
            </select>
        </div>
        <div>
            <p className="text-sm mb-1">Price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price} required className="text-sm px-2 py-1 w-32" type="number"  />
        </div>
      </div>
      
      
{/* 
      product size  */}

      <div >
        <p className="mb-2">Product Size</p>
        <div className="flex gap-2">
            <p onClick={handleClick}  className={`border border-gray-300 px-2 py-1  rounded ${size.includes('S')?"bg-pink-400":""}`}>S</p>
            <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${size.includes("M")?"bg-pink-400":""}`}>M</p>
            <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${size.includes("L")?"bg-pink-400":""}`}>L</p>
            <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${size.includes("XL")?"bg-pink-400":""}`}>XL</p>
            <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${size.includes("XXL")?"bg-pink-400":""}`}>XXL</p>
        </div>
       
      </div>
      <label className="flex gap-2 text-sm" htmlFor="check">
        <input onChange={()=>setBestSeller((pre)=>!pre)} checked={bestSeller} type="checkbox"  id="check" />
        <p>Add To BestSeller</p>
      </label>
      <button className="border bg-red-500 text-white  max-w-[100px] px-1 py-1 rounded font-semibold" >Add</button>
    </div>
    </form>
    </div>
    
  );
}

export default AddItem;
