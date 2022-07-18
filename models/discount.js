const mongoose = require('mongoose');

var discount = new mongoose.Schema({
    discountID: {type: String}, //using uuid as mongoose object id is annoying to use

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