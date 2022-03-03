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
const port = 3001 || process.env.PORT
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

mongoose.connect(localmongo, {useUnifiedTopology:true ,useNewUrlParser: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors(corsOptions))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(require("express-session")({
    secret: "wherever",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new customStrategy(
    function(req, done) {
        User.findOne({
            username: req.body.username
        }, function(err, user) {
            if (err || user==null) {
                return done(err, false)
            }
            user.authenticate(req.body.password, (error)=> {
                if (error==null) {
                    done(err, user)
                } else {
                    done(error, false)
                }
            })
        })
    }
))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(methodoverride("_method"))
app.use(express.static("public"))

var server = app.listen(port, function () {
    console.log("server started " + port)
})