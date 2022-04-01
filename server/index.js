const express = require("express")
const passport = require('passport')
const app = express()
const bodyparser = require("body-parser")
const localStrategy = require("passport-local")
const customStrategy = require('passport-custom')
const methodoverride = require("method-override")
const mongoose = require("mongoose")
const localmongo = "mongodb://localhost:27017/foodium"
const cors = require("cors");
const User = require('./models/user');
const Feedback = require('./models/feedback')
const Mess = require('./models/mess')
const MenuItem = require('./models/menuItem')
const port = 3001 || process.env.PORT

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
mongoose.connect(localmongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors(corsOptions))
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({
    limit: '50mb',
    extended: true
}))
app.use(methodoverride("_method"))
app.use(express.static("public"))

var server = app.listen(port, function () {
    console.log("server started " + port)
})

const router = require('./mess/messroute')
app.use(router)

