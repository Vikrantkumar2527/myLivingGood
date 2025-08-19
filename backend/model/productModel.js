import mongoose from "mongoose"
import { type } from "os";

const commentSchema=mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }

})

const productSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true  
    },
    priceTwoSetter:{
        type:Number,
        required:true
    },
    priceThreeSetter:{
        type:Number,
        required:true
    },
    image:{
        type:Array,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    typeProperty:{
        type:String,
        required:true
    },
    amenities:{
        type:Array,
        required:true
    },
    trending:{
        type:Boolean,
    },create_At:{
            type:Date,
            default:Date.now
        },
    comments:[commentSchema]
})
const productModel=mongoose.model("Proudct",productSchema)

export default productModel;
