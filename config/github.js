
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User=require('../models/user-model')

passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        callbackURL: 'http://localhost:3000/auth/github/callback',
      },
      (accessToken,refreshToken,profile,done) => {
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
    )
  );
  