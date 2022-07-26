const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const dotenv = require("dotenv").config(); //jwt auth, refer to .env for validation



const app = express();

const cart = require("./routes/cart");
app.use('/api/cart', cart);

const order = require("./routes/order");
app.use('/api/order', order);

const address = require("./routes/address");
app.use('/api/address', address);


const viewAll = require('./routes/viewAll');
app.use('/api/all', viewAll);



const merchant = require('./routes/merchant');
app.use('/api/merchant', merchant);

const category = require('./routes/category');
app.use('/api/category', category);

app.use('/', express.static(path.join(__dirname, 'static')));
mongoose.connect('mongodb://localhost:27017/webApp');



// signup routing
const signupRoute = require('./routes/register');
app.use('/api/signup', signupRoute); //all api/signup requests will be sent to user.js
app.use('/signup', (req, res) => { //frontend
    res.sendFile('signup.html', {root: './static'}) //replace with frontend 
 });

 //login routing
 const loginRoute = require('./routes/login');
 app.use('/api/login', loginRoute);
 app.get('/login', (req, res) => {
    res.sendFile('login.html', {root: './static'}) //replace with frontend 
});

//product routing
const productRoute = require('./routes/product');
app.use('/api/product', productRoute);

app.listen(3001, () => {
    console.log('server running on port 3001')
});
