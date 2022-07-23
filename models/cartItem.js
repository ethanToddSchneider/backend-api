const mongoose = require('mongoose');

var cartItem = new mongoose.Schema({
    userID: {
        type: String,
        ref: "userSchema"

    },
    productID: {
        type: String,
        ref: "product"
    },
    quantity: {
        type: Number
    },
    size: {
        type: String
    }
});

const model = mongoose.model('cartItem', cartItem);
module.exports = model