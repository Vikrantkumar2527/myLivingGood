import mongoose from "mongoose"

const productSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true  
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    size:{
        type:Array,
        required:true
    },
    bestseller:{
        type:Boolean,
    }
})
const productModel=mongoose.model("Proudct",productSchema)

export default productModel;
