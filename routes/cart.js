const bodyParser = require("body-parser");
const express = require("express");
const router = express()
router.use(bodyParser.json());
const cart = require('../models/cartItem');


router.post('/', async (req, res) => {
    cart.create({
        userID: req.body.userID,
        productID: req.body.productID,
        quantity: req.body.quantity,
        size: req.body.size

    });

});
module.exports = router;