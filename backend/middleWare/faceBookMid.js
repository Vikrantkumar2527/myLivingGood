import { Strategy as FacebookStrategy } from "passport-facebook"
import googleUserModel from "../model/googleuser.js";

const middleWare = (passport) => {
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "https://mylivinggood-backend.onrender.com/api/user/facebook/callback",
    profileFields: ['id', 'displayName', 'emails']
  },
    async function (accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      //   return cb(err, user);
      try {
        if (accessToken) {
        let user = await googleUserModel.findOne({ profile_id: profile.id });
        // console.log(user)
        if (!user) {
          let newObj = new googleUserModel(
            {
              username: profile.displayName,
              email: profile.email,
              provider: profile.provider,
              profile_id: profile.id
            }
          )
          let newUser=await newObj.save();
          return done(null,newUser);

        }
        return done(null,user);

      }
        
      } catch (error) {
        return done(error,false)
      }
      
    }
  ));
}
export default middleWare;