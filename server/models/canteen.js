var mongoose=  require("mongoose")
const CanteenItem = require('./canteenitem').schema
var CanteenSchema = mongoose.Schema({
    vendor: String,
    username: String,
    phone: String, 
    email: String,
    items: [CanteenItem]
})

module.exports = mongoose.model("Canteen", CanteenSchema)
