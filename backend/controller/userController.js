import userModel from "../model/userModel.js";
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken'
import validator from "validator";
import dotenv from 'dotenv'
import sendEmail from "../Emailverfication/emailverf.js";
import tempUserModel from "../model/tempuserModel.js";
dotenv.config();
//generate token
const createToken =(id)=>{
   return jwt.sign(
       {id} , //payload 
        process.env.TOKEN_SCERET //secret key
    )
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    //checking user is exist for the give mail or not
    if (!user) {
      return res.json({
        success: false,
        message: "User Not exist",
      });
    }

    //checking password is correct or not
    const compare = await bcrypt.compare(password, user.password);
    if (compare) {
      const token = createToken(user._id);
      res.json({
        success: true,
        message: "Welcome to Forever!",
        token,
        username:user.username
      });
    } else {
      return res.json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    res.status(500).json({
      success:false,
      message:`${error.message}`
    })
    console.log(error);
  }
      
    


};



//register user
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
      return res.json({
        success:false,
        message:"All three value required!"
      })
    }
    

    // checking if user is already exist or not;
    if(!validator.isEmail(email)){
      return res.json({
          success: false,
          message: "Enter valid email",
        });
  }
    const exist = await tempUserModel.findOne({ email: email });
    if (exist) {
      return res.json({
        success: false,
        message: "Try after 5 min or Use different Mail",
      });
    }
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      return res.json({
        success:false,
        message: "Email already register",
      });
    }

    //checking if email and password is valid or not
   
    if(password.length<8){
        return res.json({
            success: false,
            message: "Password length should more than 8",
          });
    }

    //hasing the password

    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
    //generating six digit verfication code
    const verificationCode= Math.floor(100000+Math.random()*900000);
    //now adding the user into your mongobd data base 
    const newUser=new tempUserModel(
        {
            username:username,
            email:email,
            password:hashPassword,
            verificationCode:verificationCode,
        }
    )
    const user=await newUser.save();
    //sending email
    sendEmail(user.email,user.verificationCode);
    
    res.json(
        {
            success:true,
            // token:token,
            message:"Mail send to your email for verfication"
        }
    )



  } catch (err) {
    console.log(err);
    res.json(
        {
            success:false,
            message:err.message
        }
    )
  }

  //checking if email or password is validate or not
};


const verification = async (req, res) => {
  try {
    const { email } = req.params;
    const { code } = req.body;
    //checking if user already is in main database
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.json({
        success:false,
        message: "User already exist",
      });
    }
    //checking user is in tempdata aur not
    const userExist = await tempUserModel.findOne({ email: email });
    if (userExist==null) {
      return res.json({
        success: false,
        message: "code is expire",
      });
    }
    if (userExist.verificationCode != code) {
      return res.json({
        success: false,
        message: "otp is incorrect",
      });
    }
    const newUserObj = new userModel({
      username: userExist.username,
      email: userExist.email,
      password: userExist.password,
    });
    const newUser = await newUserObj.save();
    const token = createToken(
            newUser._id
          );
    await tempUserModel.deleteOne({ email: email });

    res.json({
      success:true,
      message: "User Register Successfull",
      username:newUser.username,
      token: token,
    });
  } 
  
  catch (error) {
    console.log(error)
    res.json(
      {
        success:false,
        message:`${error.message}`
      }
    )
  }
};


//admin login 

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASS) {
      const token = jwt.sign(
        {
          email:process.env.ADMIN_EMAIL,
          password:process.env.ADMIN_PASS
        }
        , process.env.TOKEN_SCERET);
      return res.json({
        token,
        message: "You are Logged in as Admin!",
        success: true
      });
    }else{
      return res.json({
        message: "Invalid credentials",
        success: false
      });
    }
  } catch (error) {
    console.log(error)
    res.json(
      {
        success:false,
        message:`${error.message}`
      }
    )
  }
};

export { login, register,verification ,adminLogin};
