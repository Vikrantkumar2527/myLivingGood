import React, { useContext, useEffect, useState } from "react";
import Title1 from "../Component/Title1";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    setCartItems,
    products,
    currency,
    countCartItem,
    cartData,
    setCartData,
    paise,
    shippingCharge,
    backendUrl,
    token,
    importCart
  } = useContext(ShopContext);
  useEffect(() => {
    let temData = [];
    if (Object.keys(cartItems).length > 0) {
      for (const id in cartItems) {
        for (const sz in cartItems[id]) {
          if (cartItems[id][sz] > 0) {
            temData.push({
              _id: id,
              sizze: sz,
              quantity: cartItems[id][sz],
            });
          }
        }
      }
      setCartData(temData);
    } else {
      setCartData([])
    }
  }, [cartItems]);

  async function handleDelete(id, sz) {
    const response=await axios.post(backendUrl+"/api/cart/deletecart",{id,sz},{headers:{token}})
    if(response.data.success){
      importCart()
    }
  }
  useEffect(
    () => {
      countCartItem();
     
    },
    [cartItems],
    [cartData]
  );

  return (
    <div className="">
      <div className="m-4">
        <Title1 text1={"YOUR"} text2={"CART"} />

        {cartData.map((ele, idx) => {
          let pro = products.find((product) => product._id == ele._id);

          return (
            <div
              key={idx}
              className="flex justify-between items-center mt-3 p-4 border border-black"
            >
              <div className="flex items-center gap-2 sm:gap-8">
                <img
                  className="w-20 sm:w-32 h-20 sm:h-32"
                  src={pro.image[0]}
                  alt="image"
                />
                <div>
                  <p className="font-base sm:font-bold text-sm sm:text-xl mb-8">
                    {pro.name}
                  </p>
                  <p className="text-sm sm:text-lg">
                    {currency}
                    {pro.price}{" "}
                    <span className="border border-black p-1 sm:p-2 h-4 ml-2 sm:ml-4">
                      {ele.sizze}
                    </span>
                  </p>
                </div>
              </div>

              <p className="mr-5 sm:mr-0">{ele.quantity}</p>
              <div>
                <img
                  onClick={() => handleDelete(ele._id, ele.sizze)}
                  className="h-[16px] w-[16px] cursor-pointer"
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`flex w-[10px] mt-24 sm:w-full h-44 ${
          cartData.length > 0 ? "block" : "hidden"
        } px-4`}
      >
        <div className=" w-1/2 h-[100%] hidden sm:block">
          {/* ye div empty space create krne ke liye hain */}
        </div>
        <div className="flex-1 mt-[-15px] px-5">
          <div className="">
            <Title1 text1={"CART"} text2={"TOTALS"} />
          </div>
          <div className="mt-4">
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
                {shippingCharge+paise}
              </p>
            </div>
            <div className="flex sm:flex-row-reverse mt-4">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-[10px] p-3 mt-2"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
