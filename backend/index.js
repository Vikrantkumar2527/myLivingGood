import express from 'express';
import passport from 'passport';
import cors from 'cors';
import {cloudinaryConf} from './config/cloudinaryConfig.js';
import mongoConfig from "./config/mongoConfig.js"
import userRoute from './route/userRoute.js';
import 'dotenv/config'
import productRoute from './route/productRoute.js';

import googleStrategy from './middleWare/googleMid.js';
import middleWare from './middleWare/faceBookMid.js';
const app=express();
const port=process.env.PORT || 4000;
//configuration
mongoConfig();
cloudinaryConf();
app.use(passport.initialize());
googleStrategy(passport);  // Bas is line se strategy register ho jaati hai
middleWare(passport);

//connection 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//google get
app.get('/auth/google',
passport.authenticate('google', { scope:
      [ 'email', 'profile' ] ,
      session:false
    }

));
app.get('/auth/facebook',
  passport.authenticate('facebook',{
    scope:["email"],
    session:false
  }),
);
app.use('/api/user',userRoute);
app.use("/api/product",productRoute)




app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})