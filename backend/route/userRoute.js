import express from 'express';
import {adminLogin, login,register, verification} from '../controller/userController.js'
const userRoute=express.Router();

userRoute.post('/login',login);
userRoute.post('/register',register);
userRoute.post('/verify/:email',verification);
userRoute.post('/admin',adminLogin)

export default userRoute;

