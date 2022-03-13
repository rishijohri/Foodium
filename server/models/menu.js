var mongoose = require('mongoose');
  
var MenuItemSchema = new mongoose.Schema({
    name: String,
    quality: Number, 
    health: Number,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = mongoose.model('MenuItem', MenuItemSchema);