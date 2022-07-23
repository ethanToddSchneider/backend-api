const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
let products = require('../models/product');
const merchant = require("../models/merchant")
let categories = require('../models/product_category');
const discount = require("../models/discount");
const { json } = require("body-parser");


//returns all products
router.get('/',  (req, res) => {

    products.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
}) 

//this is to return all products under a certain merchant/
router.get('/merchant/:id', async (req, res) => {
    var id = req.params.id;
    merchant.countDocuments({_id: id}, async function (err, count) {
        if (count > 0) { //merchant id have been found
            var response = await products.find({merchantID: id}).populate('discountID', 'discountPercent discountDesc active').populate('categoryID', 'name').populate('merchantID', 'merchantName');
            res.json(response);
        } else {
            res.status(400).json({message: "Merchant not found"});
            console.log(err);
        }
    });
});

//returns all product by category
router.get('/category/:id', async (req, res) => {
    var id = req.params.id;
    categories.countDocuments({_id: id}, async function (err, count) {
        if (count > 0) { //category id have been found
            var response = await products.find({categoryID: id}).populate('discountID', 'discountPercent discountDesc active').populate('categoryID', 'name').populate('merchantID', 'merchantName');
            res.json(response);
        } else {
            res.status(400).json({message: "category not found"});
            console.log(err);
        }
    });
});

//returns all products by discount
router.get('/discount/:id', async (req, res) => {
    var id = req.params.id;
    discount.countDocuments({_id: id}, async function (err, count) {
        if (count > 0) { //category id have been found
            var response = await products.find({discountID: id}).populate('discountID', 'discountPercent discountDesc active').populate('categoryID', 'name').populate('merchantID', 'merchantName');
            res.json(response);
        } else {
            res.status(400).json({message: "discount not found"});
            console.log(err);
        }
    });
});






module.exports = router;