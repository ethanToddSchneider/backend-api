const mongoose = require('mongoose');

var category = new mongoose.Schema({
    categoryID: {type: String}, //using uuid as mongoose object id is annoying to use
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