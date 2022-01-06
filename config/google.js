const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User=require('../models/user-model')

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: '94232511282-6gb532becg0c8jrpbnpka5j0758sss8s.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: '/auth/google/callback'
    }, (accessToken,refreshToken,profile,done) => {
        //find user is already registered or not
        User.findOne({googleId:profile.id}).then((currentUser)=>
        {
            if(currentUser)
            {
                console.log("User is" , currentUser);
            }
            else
            {  new User({ 
                firstname:profile.given_name,
                lastname:profile.family_name,
                googleid:profile.id,
                githubid:String,
                }).save().then((newUser)=>
                {
                    console.log('New User Created'+newUser);
                })

            }
        })



        //save user data
      
    })
);