const mongoose = require('mongoose');

var category = new mongoose.Schema({
    name: {//name of prod category, eg. electronics
        type: String
    },
    categoryDesc: {
        type: String
    }
},
{collection: 'category'}
);

const model = mongoose.model('category', category);
module.exports = model