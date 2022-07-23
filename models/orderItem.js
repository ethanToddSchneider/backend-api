const mongoose = require('mongoose');

var orderItem = new mongoose.Schema({
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

const model = mongoose.model('orderItem', orderItem);
module.exports = model