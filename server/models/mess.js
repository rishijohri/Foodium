var mongoose=  require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var MessSchema = mongoose.Schema({
    vendor: String,
    username: String,
    password: String,
    phone: String, 
    email: String,
    breakfast: Number,
    lunch: Number,
    dinner: Number,
    pin: Number
})

MessSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Mess", MessSchema)
