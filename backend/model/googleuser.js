import mongoose from "mongoose";

const googleUserSchema=mongoose.Schema(
    {
        username:String,
        email:{
            type:String,
            default:"Not get"
        },
        provider:String,
        profile_id:String,
        create_At:{
            type:Date,
            default:Date.now
        }

    }
)
const googleUserModel=mongoose.model('googleUser',googleUserSchema)
export default googleUserModel;