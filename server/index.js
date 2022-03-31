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


// app.post('/signin', passport.authenticate('custom', { failureRedirect: '/fail' }), async (req, res) => {
//     console.log('entered signin')
//     console.log(req.user)
//     res.json({
//         result: "success"
//     })
// })

// app.post('/signout', (req, res) => {
//     console.log('entered logout')
//     if (req.isAuthenticated()) {
//         console.log(req.user)
//         req.logOut();
//         res.json({
//             result:"success"
//         })
//     } else {
//         res.json({
//             result:'success'
//         })
//     }
// })

// app.get('/fail', function (req, res) {
//     console.log('entered fail')
//     res.json({
//         result: "fail"
//     })
// })

// app.post("/signup", function (req, res) {
//     console.log('entered signup')
//     var balance = 0;
//     User.register(new User({
//         username: req.body.username,
//         phone: req.body.phone,
//         email: req.body.email,
//         agreement: req.body.agreement,
//         position: req.body.position,
//         balance: balance
//     }), req.body.password, function (err, newUser) {
//         if (err) {
//             console.log(err)
//             res.json({
//                 result: "error",
//                 nav: "/sign-up",
//                 error: err,
//                 src: "signup"
//             })
//         } else {
//             passport.authenticate("custom")
//                 (req, res, () => {
//                     res.json({
//                         result: "success",
//                         nav: "/secret",
//                         src: "signup"
//                     })
//                 })
//         }
//     });
// })

// app.post('/feedback', (req, res) => {
//     console.log('entered feedback')
//     req.body.date = new Date(req.body.date)
//     console.log(typeof req.body.date)
//     Feedback.create(
//         req.body, (err, doc) => {
//             if (err || doc == null) {
//                 console.log(err)
//                 console.log(doc)
//                 res.json({
//                     result: 'fail'
//                 })
//             } else {
//                 console.log('feedback success')
//                 res.json({
//                     result: "success"
//                 })
//             }
//         }
//     )
// })

// app.get("/authenticate", function (req, res) {
//     console.log("entered " + "/authenticate")
//     if (req.isAuthenticated()) {
//         console.log('logged in authenticate')
//         res.json({
//             result: "success",
//             username: req.user.username,
//             position: req.user.position,
//             src: "auth" 
//         })
//     } else {
//         console.log('not logged')
//         res.json({
//             result: "error",
//             src: "auth"
//         })
//     }
//     console.log("exited " + "/authenticate")
// })

// app.post('/payeat', (req, res) => {
//     console.log('entered payeat')
//     if (req.isAuthenticated()) {
//         const dateTime = new Date();
//         const date = dateTime.getDate();
//         const month = dateTime.getMonth()+1;
//         const year = dateTime.getFullYear();
//         const hour = dateTime.getHours();
//         const minutes = dateTime.getMinutes();
//         const stringDateTime = date.toString()+"/"+month.toString()+"/"+year.toString()+" "+hour.toString()+":"+minutes.toString()
//         console.log(req.user)
//         const user = req.user.username;
//         const messval = req.body.pin;
//         console.log(messval)
//         Mess.findOne({
//             pin: messval
//         }, (err, vendor) => {
//             if (!err && vendor) {
//                 User.findOne({
//                     username: user
//                 }, (error, currUser) => {
//                     if (!error && currUser) {
//                         var payment = 0;
//                         if(hour<=10){
//                             payment = vendor.breakfast;
//                         }
//                         else if(hour <= 16){
//                             payment = vendor.lunch;
//                         }
//                         else{
//                             payment = vendor.dinner;
//                         }
//                         currUser.balance -= payment
//                         console.log('logged In')
//                         currUser.payments.push({
//                             // dateTime: stringDateTime,
//                             payment: payment,
//                             currBalance: currUser.balance
//                         });
//                         currUser.save();
//                         res.json({
//                             result: "success",
//                             date: stringDateTime,
//                             data: vendor.vendor,
//                             src: "auth"
//                         })
//                     } else {
//                         console.log('not logged')
//                         res.json({
//                             result: "error",
//                             src: "auth"
//                         })
//                     }
//                 });
//             } else {
//                 console.log('mess not found')
//                         res.json({
//                             result: "error",
//                             src: "auth"
//                         })
//             }
//         });
//     } else {
//         console.log('not logged')
//         res.json({
//             result: "error",
//             src: "auth"
//         })
//     }
// })

// app.post('/uploadimage',(req, res, next) => {
//     console.log("entered uploadimage")
//     let obj = req.body 
//     MenuItem.create(obj, (err, item) => {
//         if (err) {
//             console.log("entered error")
//             console.log(err);
//             res.json({
//                 result:"fail"
//             })
//         }
//         else {
//             console.log("entered success")
//             res.json({
//                 result:'success'
//             })
//         }
//     });
// })

// app.get('/livemenu/:param1', (req, res) => {
//     console.log('entered livemenu')
//     const mess=req.params.param1
//     console.log("live menu entered")
//     console.log(mess)
//     MenuItem.find({vendor:mess}, (err, items) => {
//         if (!err && items) {
//             // console.log(items);
//             res.json({
//                 result: "success",
//                 menuItems: items
//             });
//         }
//         else {
//             res.status(500).send('An error occurred', err);
//         }
//     });
// })

// app.get('/confirmmess/:param1', (req, res) => {
//     console.log('entered confirmmess')
//     const messval=req.params.param1
//     console.log("live menu entered")
//     console.log(messval)
//     Mess.findOne({
//         pin: messval
//     }, (err, vendor)=> {
//         if (!err && vendor) {
//             res.json({
//                 result: "success",
//                 data: vendor.vendor
//             })
//         } else {
//             res.json({
//                 result:"success",
//                 data: "unknown"
//             })
//         }
//     })
// })

// app.get('/messvendors', (req, res) => {
//     console.log('entered messvendors')
//     console.log("entered mess vendors")
//     Mess.find({}, (err, items) => {
//         if (!err && items) {
//             res.json({
//                 result: "success",
//                 menuItems: items.map(a => {return {'label': a.vendor, 'value': a.vendor}})
//             })
//         }
//         else {
//             res.status(500).send('An error occurred', err);
//         }
//     });
// })

// app.get('/livereview/:param1', (req, res) => {
//     console.log('entered livereview')
//     const mess=req.params.param1
//     console.log("live review entered")
//     console.log(mess)
//     Feedback.find({vendorName:mess}, (err, items) => {
//         if (!err && items) {
//             // console.log(items);
//             res.json({
//                 result: "success",
//                 reviews: items
//             });
//         }
//         else {
//             res.status(500).send('An error occurred', err);
//         }
//     });
// })
//  
// app.get('/paymenthistory', paymentHandler.historyHandler)

// paymentHandler.js
