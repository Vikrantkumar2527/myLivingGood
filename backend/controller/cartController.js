

// add to cart 

import userModel from "../model/userModel.js";

const addToCart=async(req,res)=>{
    try {
        const {userId,size,productId}=req.body;
        if(!size || !productId){
            return res.json({
                success:false,
                message:"size is required!"
            })
        }
        const user= await userModel.findById(userId);
        let userCart=user.cartItem;
        if(userCart[productId]){
            if(userCart[productId][size]){
                userCart[productId][size]+=1
            }else{
                userCart[productId][size]=1;
            }
        }else{
            userCart[productId]={}
            userCart[productId][size]=1
        }
        const UpdateUser=await userModel.findByIdAndUpdate(userId,{cartItem:userCart})
        res.json({
            success:true,
            message:"cart Updated Successfully",
            userCart
        })
    } catch (error) {
        res.json({
            success:false,
            message:"can't add item to cart",
        })
    }
        
}

//cartdetail

const showCartItems=async(req,res)=>{
    try {
        const {userId}=req.body;
        const user=await userModel.findById(userId)
        const cartDetail=user.cartItem
        res.json({
            success:true,
            cartDetail,
            message:"successfully get cart details"
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
        
}

// delete cart items

const deletecart=async(req,res)=>{
    try {
        const {userId,sz,id}=req.body;
        const user=await userModel.findById(userId)
        const userCart=user.cartItem
        delete userCart[id][sz]

        //Deleting the id from userCart if id dont consist of sizes
        if( Object.keys(userCart[id]).length==0){
            delete userCart[id]
        }
        const UpdateUser=await userModel.findByIdAndUpdate(userId,{cartItem:userCart})
        res.json({
            success:true,
            message:"cart Updated Successfully",
            userCart
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message,
        })
        
    }
   
}

export {addToCart ,showCartItems,deletecart};