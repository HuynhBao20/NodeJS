const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coures = new Schema({
    id: {type: String},
    name: {type: String}
});
module.exports = mongoose.model('Coures', Coures);
