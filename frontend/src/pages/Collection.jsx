import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Product from "../Component/Product";
import { assets } from "../assets/frontend_assets/assets";

function Collection() {
  const { products, currency,search,setSearch } = useContext(ShopContext);
  const [collections, setCollections] = useState([]);
  const [visible, setVisible]=useState(false);
  const [catogries,setCatogries]=useState([]);
  const [subcatogries,setSubCatogries]=useState([]);
  const [sortType,setSortType]=useState("revelant");

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
 function subCatogrieFun(e){
    if(subcatogries.includes(e.target.value)){
       setSubCatogries(subcatogries.filter((ele)=>ele!=e.target.value))
    }
    else{
        setSubCatogries((pre)=>[...pre,e.target.value])
    }
 }
 
 //filter krna elements ko
 function filterProudcts(){
    let productsCopy=[...products];
  
    if(search){
      productsCopy=productsCopy.filter((ele)=>ele.name.toLowerCase().includes(search.toLowerCase()))
  }
    if(catogries.length>0){
        productsCopy=productsCopy.filter((ele)=>catogries.includes(ele.category));
    }
    if(subcatogries.length>0){
        productsCopy=productsCopy.filter((ele)=>subcatogries.includes(ele.subCategory));
    }
    switch (sortType){
      case "low-high":
       productsCopy.sort((a,b)=>a.price-b.price)
       break;
       case "high-low":
        productsCopy.sort((a,b)=>b.price-a.price)
         break;
       default:
         return setCollections(productsCopy);
        }
  
    setCollections(productsCopy);
 }



  function handleOnClick(){
    setVisible(!visible);
  }


  useEffect(() => {
    filterProudcts()
  }, [catogries,subcatogries,search,sortType,products]);

 
 

  return (
    <div className="collection flex flex-col sm:flex-row gap-8 sm:gap-20 ml-8">
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
              <input type="checkbox" checked={catogries.includes("MEN")} onChange={catogrieFun} value="MEN" />
              <p className="mx-2 text-gray-500">Men</p>
            </div>
            <div className="flex">
              <input type="checkbox" checked={catogries.includes("WOMEN")} onChange={catogrieFun} value="WOMEN" />
              <p className="mx-2 text-gray-500">Women</p>
            </div>
            <div className="flex">
              <input type="checkbox" checked={catogries.includes("KIDS")} onChange={catogrieFun} value="KIDS" />
              <p className="mx-2 text-gray-500">Kids</p>
            </div>
          </div>
          {/* second filter box */}
          <div className=" border p-4 w-60 mt-2">
            <p className="text-gray-700">TYPE</p>
            <div className="flex">
              <input onChange={subCatogrieFun} type="checkbox" value="TOPWEAR" />
              <p className="mx-2 text-gray-500">Topwear</p>
            </div>
            <div className="flex">
              <input onChange={subCatogrieFun} type="checkbox" value="BOTTOMWEAR" />
              <p className="mx-2 text-gray-500">Bottomwear</p>
            </div>
            <div className="flex">
              <input onChange={subCatogrieFun} type="checkbox" value="WINTERWEAR" />
              <p className="mx-2 text-gray-500">Winterwear</p>
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
          <div className="lthsec">
            <select
              value={sortType}
              onChange={(e)=>setSortType(e.target.value)}
              className="border border-black w-28 sm:w-44 h-8 text-gray-500 text-sm"
            >
              <option value="revelant">Sort by: Revelant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>
        {/* show all products */}
        <div className="grid gap-4 p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {collections.map((ele, idx) => {
            return (
              <Product
                key={idx}
                name={ele.name}
                image={ele.image[0]}
                price={ele.price}
                id={ele._id}
                currency={currency}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
