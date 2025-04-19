import jwt from "jsonwebtoken"
import userModel from '../model/userModel.js'
import env from "dotenv"
env.config();
const userAuth=async(req,res,next)=>{
    const  {token}=req.headers;
    if(!token){
        return res.json({
            success:false,
            message:"You are not Login"
        })
    }
    const {id}= jwt.verify(token,process.env.TOKEN_SCERET)
    
    try {
        const user= await userModel.findById(id);
        if(!user){
            return res.json({
                success:false,
                message:"User did not exist Loign with Existing user"
            })
        }
        req.body.userId=id;
        next()
    } 
    catch (error) {
        console.log(error)
        return res.json({
            success:false,
            message:error.message
        })
    }
    
}

export default userAuth;