const mongoose = require('mongoose');

var product = new mongoose.Schema({
    name: {
        type: String
    },
    productDesc: {
        type: String
    },
    merchantID: { //refers to merchant pk
        type: String,
        ref: 'merchant'
    },
    SKU: {
        type: String,
        required: 'SKU is required for product',
        unique: true
    },
    categoryID: {
        type: String,
        ref: 'category'
    },
    price: {
        type: Number
    },
    productStatus: {
        type: String
    },
    discountID: {
        type: String,
        ref: 'discount'
    },
    inventory: {
        type: Number
    }
},
{collection: 'products'}
)

const model = mongoose.model('product', product);
module.exports = model