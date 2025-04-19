

//add product controller

import productModel from "../model/productModel.js";

const addProduct= async (req,res)=>{
        try { 
               const {name,description,price,category,subCategory,sizes,bestSeller}=req.body;
               if(!name || !description || !price || !category || !subCategory || !sizes ){
                 return res.status(400).json({
                        success:false,
                        message:"All six value must required!"
                 })
               }
               
               if(!req.files || req.files.length === 0){
                return res.status(400).json({
                        success:false,
                        message:"At least upload one Image! out to 4"
                 })
               }
               const newprice =parseInt(price);
               const imageArr=req.files.map((ele)=>ele.path);
               const newProudct=new productModel({
                    name:name,
                    description:description,
                    category:category,
                    subCategory:subCategory,
                    price:newprice,
                    bestseller:bestSeller,
                    size:sizes.split(","),
                    image:imageArr
               })
                

               const product=await newProudct.save();
                res.json({
                        success:true,
                        message:"product add sucessfully",
                })
                
        } catch (error) {
                console.error(error);
                res.json({
                        message:error.message
                })
        }
        
        
}

//list all the products

const collectionProduct= async (req,res)=>{
        try {
                const products=await productModel.find();
                res.json({
                        success:true,
                        products,
                })
        } catch (error) {
                res.json({
                        success:false,
                        message:error.message
                })
        }
       
}


//deleting the product

const deleteProduct= async(req,res)=>{
        try {
                const {id}=req.body;
                const product=await productModel.findByIdAndDelete(id);
                if(product==null){
                        return res.status(400).json({
                                success:false,
                                message:"Given product is not Exist!"
                        })
                }
                 res.json({
                        success:true,
                        message:"Proudct Delete Sucessfully!",
                        product
                })
                
        } catch (error) {
                res.json({
                        success:false,
                        message:error.message
                })
        }
}

//find single product

const singleProduct=async(req,res)=>{
        const {id}=req.body;
        const product=await productModel.findById(id);
        if(!product){
                return res.status(400).json({
                        sucess:false,
                        message:"Given proudct is not exist"
                })

        }
        res.json({
                success:true,
                product
        })
        
}

export {addProduct,collectionProduct,deleteProduct,singleProduct};