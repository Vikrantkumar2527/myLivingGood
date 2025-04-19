
import orderModel from "../model/cartModel.js";
import userModel from "../model/userModel.js";
import { compareSync } from "bcrypt";
import razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

const currency = "INR";
//making instance of razorpay
const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

//place order using cod

const placeorder = async (req, res) => {
  try {
    const { userId, address, items, amount } = req.body;

    if (!address || !items || !amount) {
      return res.json({
        success: false,
        message: "address item details and amount are required",
      });
    }
    const order = new orderModel({
      userId: userId,
      items: items,
      address: address,
      amount: amount,
      status: "order-placed",
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    });

    const newOrder = await order.save();
    const user = await userModel.findByIdAndUpdate(userId, { cartItem: {} });

    res.json({
      success: true,
      message: "Order-placed successful",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//place order using razor pay payment
const razorpayOrder = async (req, res) => {
  try {
    const { userId, address, items, amount } = req.body;
    const neworder = new orderModel({
      userId: userId,
      items: items,
      address: address,
      amount: amount,
      status: "order-placed",
      paymentMethod: "razor_pay",
      payment: false,
      date: Date.now(),
    });

    const newOrder = await neworder.save();
    
    //create a option statement
    const options = {
      amount: amount * 100,
      currency: currency,
      receipt: neworder._id.toString(),
    };

    //create order in razorpay
    try {
      const order=await razorpayInstance.orders.create(options)
      
      res.json({
        success:true,
        order
      })
      
    } catch (error) {
      res.json({
        success:false,
        message:error.message
      })
    }
   
  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message });
  }
};


//verify razor pay

const verifyrazor=async(req,res)=>{
  try {
    const {userId,response}=req.body
    const order_id=response.razorpay_order_id
    const order=await razorpayInstance.orders.fetch(order_id);
    if(order.status==="paid"){
      await orderModel.findByIdAndUpdate(order.receipt,{payment:true})
      await userModel.findByIdAndUpdate(userId, { cartItem: {} })
       return res.json({success:true,message:"verify successfully"})
    }else{
       await orderModel.findByIdAndDelete(order.receipt)
      res.json({success:false,message:"Complete your payement"})
      
    }
    
  } catch (error) {
    console.log(error)
      res.json({success:false,message:error.message})
  }
   

}




//get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: "Order Data error!",
    });
  }
};

//get userOrder detail

const userOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    const temp = [];

    orders.map((order) => {
      order.items.map((item) => {
        item.date = order.date;
        item.paymentMethod = order.paymentMethod;
        item.status = order.status;
        temp.push(item);
      });
    });

    res.json({
      success: true,
      message: "data fetch successfully",
      orderData: temp,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//update order

const updateOrder = async (req, res) => {
  try {
    const { status, orderid } = req.body;
    if (!status || !orderid) {
      return res.json({
        success: false,
        message: "orderid and status required",
      });
    }
    const order = await orderModel.findByIdAndUpdate(orderid, {
      status: status,
    });
    if (!order) {
      return res.json({
        success: false,
        message: "orderid is incorrect",
      });
    }
    res.json({
      success: true,
      message: "Order status Updated",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export { placeorder,verifyrazor, getOrders, userOrder, updateOrder,razorpayOrder };
