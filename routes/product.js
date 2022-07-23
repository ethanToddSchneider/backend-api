const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
let users = require('../models/user');
let products = require('../models/product')
let merchant = require('../models/merchant')
const mongoose = require('mongoose');
let discount = require('../models/discount');
const { json } = require("body-parser");
//responds to http requests about products available

router.get('/:id', async (req, res) => { //individual product, useful for webpage of listing
    var prod = req.params.id;
    console.log(prod)
    var product = await products.findById(prod).populate('discountID', 'discountPercent discountDesc active').populate('categoryID', 'name').populate('merchantID', 'merchantName');
    // must add review

    res.json(product);


});



router.post('/', async (req, res) => {
    //superuser only


    products.create({
        name: req.body.name,
        productDesc: req.body.productDesc,
        merchantID: req.body.merchantID,
        SKU: req.body.SKU,
        categoryID: req.body.categoryID,
        price: req.body.price,
        productStatus: req.body.productStatus,
        discountID: req.body.discountID,
        inventory: req.body.inventory
    })

})

module.exports = router;