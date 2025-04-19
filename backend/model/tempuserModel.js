
import mongoose  from "mongoose";

const tempSchema=mongoose.Schema(
    {
        username:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        verificationCode:{
            type:String
        },
         createdAt: { 
            type: Date, 
            default: Date.now,
            expires: 600  //time in second 
         }

    }
)
const tempUserModel=mongoose.models.tempuser || mongoose.model("tempuser",tempSchema);
 
export default tempUserModel;
