
import express from "express"
import { getOrders, placeorder,razorpayOrder,updateOrder,userOrder,verifyrazor } from "../controller/ordersController.js";
import userAuth from "../middleWare/userAuthMid.js";
import authMid from "../middleWare/authMid.js";
import { verify } from "crypto";
const orderRoute=express.Router();

orderRoute.post("/placeordercod",userAuth,placeorder)
orderRoute.get("/getorders",authMid,getOrders)
orderRoute.post("/userorders",userAuth,userOrder)
orderRoute.post("/update",authMid,updateOrder)
orderRoute.post("/razorpay",userAuth,razorpayOrder)
orderRoute.post("/verfiyrazor",userAuth,verifyrazor)
export default orderRoute;