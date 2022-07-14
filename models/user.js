//schema model for user records
const mongoose = require('mongoose');

//create json schema for user info NO AUTH
var userSchema = new mongoose.Schema({ //schema does not include id, which mongoose includes by default


    email: {
        type: String,
        //required: 'This field is required',
        unique: true
    },
    password: {
        type: String,
        //required: 'This field is required' //not secure
    }
},
 {collection: 'users'}
);

const model = mongoose.model('userSchema', userSchema);
module.exports = model