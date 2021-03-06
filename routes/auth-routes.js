const router=require('express').Router();
const passport=require('passport');



router.get('/login',(req,res)=>
{
    res.render('login');
})

router.get('/logout',(req,res)=>
{
    res.render('logging out');
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/callback', passport.authenticate('google'),(req, res) => {
    res.send('you reached the redirect URI');
});

module.exports=router;