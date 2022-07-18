const mongoose = require('mongoose');

var orderItem = new mongoose.Schema({
    orderID: {type: String}, //using uuid as mongoose object id is annoying to use
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