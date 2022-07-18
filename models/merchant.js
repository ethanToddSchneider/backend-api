const mongoose = require('mongoose');

var merchant = new mongoose.Schema({
    merchantID: {type: String}, //using uuid as mongoose object id is annoying to use

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