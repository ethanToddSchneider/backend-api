const mongoose = require('mongoose');

var discount = new mongoose.Schema({

    discountDesc: {
        type: String
    },
    discountPercent: {
        type: Number 
    },
    active: {
        type: Boolean
    }
},
{collection: 'discounts'}
);

const model = mongoose.model('discount', discount);
module.exports = model