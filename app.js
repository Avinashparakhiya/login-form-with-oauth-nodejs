const express = require('express');
const authRoutes=require('./routes/auth-routes')
const passportSetup = require('./config/google');
const mongoose=require('mongoose')
const dataBase=require('./utils/helper');
try {
 mongoose.connect('mongodb://localhost:27017/OTH');
 console.log("Database Connection Successful");
  } catch (error) {
    handleError(error);
  }

const app = express();

// set view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.use('/auth',authRoutes);

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});