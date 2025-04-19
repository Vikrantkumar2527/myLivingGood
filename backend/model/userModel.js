import { strict } from 'assert';
import mongoose from 'mongoose';

const userSchema=new mongoose.Schema(
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
        cartItem:{
            type:Object,
            default:{},
            
        },

    },
    {minimize:false}
)

const userModel=mongoose.models.userModel || mongoose.model('user',userSchema);
export default userModel;

