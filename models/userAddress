const mongoose = require('mongoose');

var address = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "userSchema",
        required: 'This field is required',
    },
    address_line1: {
        type: String,
    },
    address_line2: {
        type: String
    },
    city: {
        type: String
    },
    postal_code: {
        type: String
    },
    territory: {
        type: String
    },
    country: {
        type: String
    }
});

const model = mongoose.model('address', address);
module.exports = model