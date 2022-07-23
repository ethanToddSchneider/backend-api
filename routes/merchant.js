const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
let users = require('../models/user');
let products = require('../models/product')
const mongoose = require('mongoose');
let discount = require('../models/discount');
const { json } = require("body-parser");

const merchant = require("../models/merchant")
//must add superuser support
router.post('/', async (req, res) => {
    merchant.create({
        merchantName: req.body.merchantName,
        merchantDesc: req.body.merchantDesc
    });

});

router.get('/', (req, res) => {
    merchant.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
})

router.get('/:id', async (req, res) => {

    //use id to view all products of a certain merchant
    try {
        const chosenMerchant = req.params.id; //merchant id

        console.log(category);
        var productAll = await products.find({merchantID: chosenMerchant}).populate('discountID', 'discountPercent discountDesc active').populate('categoryID', 'name').populate('merchantID', 'merchantName');
        res.json(productAll);
    } catch {
        res.status(400);
        console.log('didnt work');
    }
}

)

router.get('/all/:id', (req, res) => {
    merchant.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
})

module.exports = router;