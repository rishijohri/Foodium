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
        console.log(req.body)
        User.findOne({
            username: req.body.username
        }, function(err, user) {
            if (err || user==null) {
                console.log("failed number 1")
                return done(err, false)
            }
            user.authenticate(req.body.password, (error)=> {
                if (error==null) {
                    console.log("success")
                    done(err, user)
                } else {
                    console.log("failed number 2")
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

app.post('/signin', passport.authenticate('custom'), async (req, res) => {
    res.json({
        result: "success"
    })
})

app.post("/signup", function(req, res) {
    console.log("entered "+"/signup")
    // console.log(req._passport.instance)
    User.register(new User({username: req.body.username,prefix: req.body.prefix,phone: req.body.phone,email: req.body.email,confirm: req.body.confirm,agreement:req.body.agreement,position:req.body.position}), req.body.password, function (err, newUser) { 
        if (err) {
            console.log(err)
            res.json({
                result: "error",
                nav: "/sign-up",
                error: err,
                src: "signup"
            })
        }
        else {
            console.log("before authentication chk")
            passport.authenticate("custom")
            (req, res, ()=> {
                console.log("i m here")
                res.json({
                    result: "success",
                    nav: "/secret",
                    src:"signup"
                })
            })
    }
    console.log("exited "+"/sign-up")
});
})
    
app.post('/feedback', (req, res) => {
    req.body.date = new Date(req.body.date)
    console.log(typeof req.body.date)
    Feedback.create(
        req.body, (err, doc) => {
            if (err || doc==null) {
                console.log(err)
                console.log(doc)
                res.json({
                    result: 'fail'
                })
            } else {
                console.log('feedback success')
                res.json({
                    result: "success"
                })
            }
        }
    )
})