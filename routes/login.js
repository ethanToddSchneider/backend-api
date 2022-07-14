const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
let userModel = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv").config(); //random strings, refer to .env for validation

router.get('/', (req, res) => {
    res.sendFile('login.html', {root: './static'}) //replace with frontend?
});

//todo res.status for errors, recaptcha

router.post('/', async (req, res) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email}).lean(); //searches through db for this email
    
    if (!user){ //client email cannot be found in db
        console.log("Error: This Email/Password combination does not exist")
        return res.status(401).json({
            message:
            "Error: This Email/Password combination does not exist",
        })
    }

    if (await bcrypt.compare(password, user.password)) { //if clients password matches hashed password
        const token = jwt.sign(
            {
                email: user.email,
                id:  user._id //id should be compared in auth instead of password as this is still public?
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            }
        );
        res.status(200).json({
            message: "Authentication granted"
        })
        console.log("Authentication granted")
    } else {
        return res.status(401).json({
            message: "Auth failed",
         });
         console.log("Auth failed")
    }


})

module.exports = router;