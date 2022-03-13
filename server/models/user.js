var mongoose=  require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    phone: String, 
    email: String,
    position: String,
    balance: Number
})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema)
