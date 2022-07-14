const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
let userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

//crud router for signup

//user attempt to creat an account at /signup
router.post('/', async (req, res) => {
    const {email, password: plainTextPassword} = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10); //pass encrypted with 10 iterations
    console.log(req.body);


    if (!email || typeof email != 'string') { //field blank or not a string
        return res.status(401).json({
            message: "Error: email field is filled out incorrectly"
        } )
    }

    const user = await userModel.findOne({email}).lean(); //searches through db for this email
    if (user) {//email in use
        return res.status(400).json({
            message: "Error: email field is filled out incorrectly"
        } )
    } else{
        //email free to use, continue with registration
        var passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ //password regex, must be a minimum of 8 characters, 1 letter and 1 number
        if (!plainTextPassword || typeof plainTextPassword != 'string' || !passRegex.test(plainTextPassword)) {
            return res.status(400).json({
                message: "Password must best a minimum of 8 characters, with 1 letter and 1 number"
            } )
        } else{
            //pass and email good to go
            try { //responding to fetch
                const response = await userModel.create({
                    email,
                    password,
                    
                }) 
                console.log('user Created Successfully ', response);
        } catch (error) { //below is error message for incorrect signup attempt //change this I htink
            console.log(error);

        }
        }
    }

});



module.exports = router;