import express from 'express';
import passport from 'passport';
import {adminLogin, facebookControler, getUsers, googleController, login,register, verification} from '../controller/userController.js'
import authMid from '../middleWare/authMid.js';
const userRoute=express.Router();

userRoute.post('/login',login);
userRoute.post('/register',register);
userRoute.post('/verify/:email',verification);
userRoute.post('/admin',adminLogin)
userRoute.get("/google",googleController);
userRoute.get("/facebook",facebookControler);
userRoute.get("/allUsers",authMid,getUsers)

export default userRoute;

