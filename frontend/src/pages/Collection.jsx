import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Product from "../Component/Product";
import { assets } from "../assets/frontend_assets/assets";

function Collection() {
  const { products, currency,search,setSearch,showSearch } = useContext(ShopContext);
  const [collections, setCollections] = useState([]);
  const [visible, setVisible]=useState(false);
  const [catogries,setCatogries]=useState([]);
  const [type,setType]=useState([]);

//   set catogries array
 function catogrieFun(e){
    if(catogries.includes(e.target.value)){
       setCatogries(catogries.filter((ele)=>ele!=e.target.value))
    }
    else{
        setCatogries((pre)=>[...pre,e.target.value])
    }
 }
 //setting subcatogry array
 function typeFun(e){
    if(type.includes(e.target.value)){
       setType(type.filter((ele)=>ele!=e.target.value))
    }
    else{
        setType((pre)=>[...pre,e.target.value])
    }
 }
 
 //filter krna elements ko
 function filterProudcts(){
    let productsCopy=[...products];
  
    if(search){
      productsCopy=productsCopy.filter((ele)=>ele.name.toLowerCase().includes(search.toLowerCase()))
  }
    if(catogries.length>0){
        productsCopy=productsCopy.filter((ele)=>catogries.includes(ele.gender));
    }
    if(type.length>0){
        productsCopy=productsCopy.filter((ele)=>type.includes(ele.typeProperty));
    }
  
    setCollections(productsCopy);
 }



  function handleOnClick(){
    setVisible(!visible);
  }


  useEffect(() => {
    filterProudcts()
  }, [catogries,type,search,products]);

 
 

  return (
    <>
    
    <div className={`collection flex flex-col sm:flex-row gap-8 sm:gap-20 ml-2 sm:ml-8  ${showSearch?"mt-[1px]":"mt-[120px]"}`}>
      <div className="filter my-1 sm:my-8">
        <div className="flex items-center">
             <p className="sm:mb-[1px]">FILTERS</p>
             <img onClick={handleOnClick} src={assets.dropdown_icon} className={`h-5 mx-4 block sm:hidden ${visible?"rotate-90":""}`}  alt="" />
        </div>
        
        {/* first filter box */}

        <div className={`bothbox ${visible?"block":'hidden'} sm:block`}>
          <div className="filter1 border p-1 sm:p-4 w-60 mt-2">
            <p className="text-gray-700">CATEGORIES</p>
            <div className="flex">
              <input type="checkbox" checked={catogries.includes("BOYS")} onChange={catogrieFun} value="BOYS" />
              <p className="mx-2 text-gray-500">Boys</p>
            </div>
            <div className="flex">
              <input type="checkbox" checked={catogries.includes("GIRLS")} onChange={catogrieFun} value="GIRLS" />
              <p className="mx-2 text-gray-500">Girls</p>
            </div>
            <div className="flex">
              <input type="checkbox" checked={catogries.includes("BOTH")} onChange={catogrieFun} value="BOTH" />
              <p className="mx-2 text-gray-500">Both</p>
            </div>
          </div>
          {/* second filter box */}
          <div className=" border p-4 w-60 mt-2">
            <p className="text-gray-700">TYPE</p>
            <div className="flex">
              <input onChange={typeFun} checked={type.includes("HOSTEL")} type="checkbox" value="HOSTEL" />
              <p className="mx-2 text-gray-500">HOSTEL</p>
            </div>
            <div className="flex">
              <input onChange={typeFun} checked={type.includes("PG")} type="checkbox" value="PG" />
              <p className="mx-2 text-gray-500">PG</p>
            </div>
            <div className="flex">
              <input onChange={typeFun} checked={type.includes("ROOM")} type="checkbox" value="ROOM" />
              <p className="mx-2 text-gray-500">ROOM</p>
            </div>
          </div>
        </div>
      </div>
      {/* show all collections */}

      <div className="w-full ">
        <div className="flex items-center justify-between sm:w-full p-1 sm:p-4">
          <div className="mx-2">
            <div className="flex items-center">
              <div className="text-[10px] sm:text-base text-gray-500">ALL</div>
              <div className="text-black text-[10px] sm:text-base font-semibold">COLLECTIONS</div>
              <div className="hidden sm:block h-[2px] w-[20px] bg-black"></div>
            </div>
          </div>
        </div>
        {/* show all products */}
        <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2">
          {collections.length>0?collections.map((ele, idx) => {
            return (
              <Product 
                key={idx}
                name={ele.name}
                image={ele.image[0]}
                price={ele.priceTwoSetter}
                id={ele._id}
                currency={currency}
                location={ele.location}
              />
            );
          }):<div className="mt-12 font-bold text-xl text-orange-600">No data found </div>}
        </div>
      </div>
    </div>
    </>
  );
}

export default Collection;
