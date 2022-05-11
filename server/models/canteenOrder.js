var mongoose=  require("mongoose")
const CanteenMenuItem=require("./canteenMenuItem.js").schema

var CanteenOrderSchema = mongoose.Schema({
    payment: Number,
    currBalance: Number,
    order: [CanteenMenuItem],
    vendor:String,
    orderStatus: {type: String, default: 'wait'}
},{ timestamps: true })

module.exports = mongoose.model("CanteenOrder", CanteenOrderSchema)
