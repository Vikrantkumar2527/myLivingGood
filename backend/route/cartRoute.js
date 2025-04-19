
import express from "express"
import userAuth from "../middleWare/userAuthMid.js"
import { addToCart, deletecart, showCartItems } from "../controller/cartController.js";
const cartRoute=express.Router();

cartRoute.post("/addcart",userAuth,addToCart)
cartRoute.get("/getcart",userAuth,showCartItems)

cartRoute.post("/deletecart",userAuth,deletecart)
export default cartRoute