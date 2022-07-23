const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
let categories = require('../models/product_category');
const mongoose = require('mongoose');
const { json } = require("body-parser");
let products = require('../models/product')


//create, for superuser
router.post('/', (req, res) => {
    try {
        categories.create({
            name: req.body.name,
            categoryDesc: req.body.categoryDesc
        })
        res.status(200).statusMessage('Category Pushed to Mongo')
        json.end();

    }
    catch {
        res.status(400);
    }
})

//list all products by category



//update

//delete, id

module.exports = router;