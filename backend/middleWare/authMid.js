import dotenv from "dotenv"
dotenv.config();
import jwt from "jsonwebtoken"
const authMid= async(req,res,next)=>{
        const {token}=req.headers;
        if(!token){
            return res.json({
                success:false,
                message:"Admin access fail please Login as Admin"
            })
        }
        const getToken=jwt.verify(token,process.env.TOKEN_SCERET)
        // console.log(getToken);
        if(getToken.email!=process.env.ADMIN_EMAIL && getToken.password!=process.env.ADMIN_PASS){
            return res.status(400).json({
                success:false,
                message:"Admin credential Miss match"
            })
        }
        next();

}

export default authMid;