
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import userModel from '../model/userModel.js';
import googleUserModel from '../model/googleuser.js';
let googleStrategy= function(passport){
    passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://mylivinggood-backend.onrender.com/api/user/google",
    passReqToCallback   : true
  },
  async function(request,accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    console.log(profile.email)
    try {
        if(accessToken){
            let user=await userModel.findOne({email:profile.email});
            if(!user){
                user=await googleUserModel.findOne({email:profile.email});
            }
            if(!user){
                const newUserObj=new googleUserModel({
                    email:profile.email,
                    provider:profile.provider,
                    username:profile.displayName,
                    profile_id:profile.id
                }
            )
            const newUser=await newUserObj.save();
            return done(null,newUser)
             
            }
            return done(null,user);
        }else{
            return done(null,false)
        }
        
    } catch (error) {
        return done(error,null)
    }
  }
));

}
export default googleStrategy;
