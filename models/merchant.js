const mongoose = require('mongoose');

var merchant = new mongoose.Schema({

    merchantName: {
        type: String
    },
    merchantDesc: {
        type: String
    },
},
{collection: 'merchants'}
);

const model = mongoose.model('merchant', merchant);
module.exports = model