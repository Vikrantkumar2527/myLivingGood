import express from 'express';
import cors from 'cors';
import {cloudinaryConf} from './config/cloudinaryConfig.js';
import mongoConfig from "./config/mongoConfig.js"
import userRoute from './route/userRoute.js';
import 'dotenv/config'
import productRoute from './route/productRoute.js';
import  cartRoute  from './route/cartRoute.js';
import orderRoute from './route/orderRoute.js';
const app=express();
const port=process.env.PORT || 4000;
//configuration
mongoConfig();
cloudinaryConf();

//connection 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user',userRoute);
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)



app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})