import mongoose from "mongoose";
const mongoConfig= async ()=>{
    await mongoose.connect(`${process.env.MONGO_URL}`);
    mongoose.connection.on("connected",()=>{
        console.log("connect to database");
    });
}

export default mongoConfig;