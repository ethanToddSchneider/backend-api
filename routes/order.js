const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
const cart = require('../models/cartItem');
const order = require('../models/orderItem')

//make sure to delete from cart

router.post('/', async (req, res) => {
    
    order.create({
        userID: req.body.userID,
        productID: req.body.productID,
        quantity: req.body.quantity,
        size: req.body.size

    });


    cart.remove({productID: req.body.productID}, function(err) {
        if (!err) {
            res.statusCode(400);
            res.send('Error removing items from cart');
        }
    })
});