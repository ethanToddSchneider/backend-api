const mongoose = require('mongoose');

var cartItem = new mongoose.Schema({
    cartID: {type: String}, //using uuid as mongoose object id is annoying to use
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