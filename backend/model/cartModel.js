
import mongoose from "mongoose";

const orderSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    items:{
        type:Object,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    },
    payment:{
        type:Boolean,
        required:true
    },
    date:{
        type:String,
        required:true
    }

})

const orderModel= mongoose.model("order",orderSchema)

export default orderModel