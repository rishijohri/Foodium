var mongoose=  require("mongoose")
const CanteenItem = require('./canteenMenuItem').schema
var CanteenSchema = mongoose.Schema({
    vendor: String,
    username: String,
    phone: String, 
    email: String,
    items: [CanteenItem]
})

module.exports = mongoose.model("Canteen", CanteenSchema)
