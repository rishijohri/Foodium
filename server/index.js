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
const Menu = require('./models/menu')
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
    function (req, done) {
        User.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err || user == null) {
                return done(err, false)
            }
            user.authenticate(req.body.password, (error) => {
                if (error == null) {
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

app.post('/signin', passport.authenticate('custom'), async (req, res) => {
    res.json({
        result: "success"
    })
})

app.post("/signup", function (req, res) {
    var balance = 0;
    User.register(new User({
        username: req.body.username,
        prefix: req.body.prefix,
        phone: req.body.phone,
        email: req.body.email,
        confirm: req.body.confirm,
        agreement: req.body.agreement,
        position: req.body.position,
        balance: balance
    }), req.body.password, function (err, newUser) {
        if (err) {
            console.log(err)
            res.json({
                result: "error",
                nav: "/sign-up",
                error: err,
                src: "signup"
            })
        } else {
            passport.authenticate("custom")
                (req, res, () => {
                    res.json({
                        result: "success",
                        nav: "/secret",
                        src: "signup"
                    })
                })
        }
    });
})

app.post('/feedback', (req, res) => {
    req.body.date = new Date(req.body.date)
    console.log(typeof req.body.date)
    Feedback.create(
        req.body, (err, doc) => {
            if (err || doc == null) {
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

app.get("/authenticate", function (req, res) {
    console.log("entered " + "/authenticate")
    if (req.isAuthenticated()) {
        console.log('logged in')
        res.json({
            result: "success",
            user: req.user,
            src: "auth"
        })
    } else {
        console.log('not logged')
        res.json({
            result: "error",
            src: "auth"
        })
    }
    console.log("exited " + "/authenticate")
})

app.post('/payeat', (req, res) => {
    if (req.isAuthenticated()) {
        const dateTime = new Date();
        console.log(req.user)
        const hours = dateTime.getHours();
        const user = req.user.username;
        const mess = req.body.messUsername;
        console.log(mess)
        Mess.findOne({
            vendor: mess
        }, (err, vendor) => {
            if (!err && vendor) {
                User.findOne({
                    username: user
                }, (error, currUser) => {
                    if (!error && currUser) {
                        currUser.balance -= 50
                        currUser.save()
                        console.log('logged In')
                        res.json({
                            result: "success",
                            src: "auth"
                        })
                    } else {
                        console.log('not logged')
                        res.json({
                            result: "error",
                            src: "auth"
                        })
                    }
                });
            } else {
                console.log('mess not found')
                        res.json({
                            result: "error",
                            src: "auth"
                        })
            }
        });
    } else {
        console.log('not logged')
        res.json({
            result: "error",
            src: "auth"
        })
    }
})
app.get('/live-menu', (req, res) => {
    const mess=req.body.messName
    Menu.findMany({messName:mess}, (err, items) => {
        if (!err and items) {
            console.log(items.);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
})