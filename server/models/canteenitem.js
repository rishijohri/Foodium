var mongoose = require('mongoose');
  
var CanteenItem = mongoose.Schema({
    name: {type: String, default: ""},
    vendor: {type: String, default: ""},
    desc: {type: String, default: "Normal"},
    rating: {type: Number, default: 0},
    available: {type: Boolean, default: true}, 
    image :String
}, { timestamps: true });
  
//Image is a model which has a schema imageSchema
  
module.exports = mongoose.model('CanteenItem', CanteenItem);