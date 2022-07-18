const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
let users = require('../models/user');
let products = require('../models/product')
const mongoose = require('mongoose');
let discount = require('../models/discount');
const { json } = require("body-parser");
//responds to http requests about products available

router.get('/:id', async (req, res) => {
    var prod = req.params.id
    var product = await products.findOne({prod}).populate('discountID');

    //const productDisc = req.params.id;
    //const product = await products.findOne({productDisc}).lean().populate('discount');
    /* const prodDiscId = product.discountID;
    const discount = discounts.findOne({prodDiscId}).lean();
    if (discounts.findOne({discount})) { //if products discount is found in db
        if (discount.active) {
        }
    } */
    //var i = discountLookup(product)
    res.json(product);


});

async function discountLookup (prod) {
    const discID = prod.discountID;
    console.log(discID);
    const discount = await discounts.findOne({discID}).lean();
    console.log('f')
    return discount

}

module.exports = router;


