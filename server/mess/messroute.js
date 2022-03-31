const express = require("express")
const router = express.Router()
const passport = require('passport')
const customStrategy = require('passport-custom')
const livereviewHandler = require('./livereviewHandler')
const messvendorsHandler = require('./messvendorsHandler')
const confirmmessHandler = require('./confirmmessHandler')
const { livemenuHandler, uploadimageHandler } = require("./livemenuHandler")
const authenticateHandler = require("./authenticateHandler")
const {historyHandler,payEatHandler}=require("./paymentHandler")
const { signinHandler, signupHandler, signoutHandler, failHandler} = require('./signHandler')
const User = require('../models/user')
const feedbackHandler = require("./feedbackHandler")
router.use(require("express-session")({
    secret: "wherever",
    resave: false,
    saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())
passport.use(new customStrategy(
    function (req, done) {
        User.authenticate()(req.body.username, req.body.password, (error, fnd) => {
            if (error == null) {
                done(error, fnd)
            } else {
                done(error, null)
            }
        })
    }
))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
router.post('/signin', passport.authenticate('custom', { failureRedirect: '/fail' }), signinHandler)
router.post('/logout', signoutHandler)
router.post('/payeat', payEatHandler)
router.post("/signup", signupHandler)
router.post('/feedback', feedbackHandler)
router.post('/uploadimage', uploadimageHandler)
router.get('/fail', failHandler)
router.get('/livereview/:param1', livereviewHandler)
router.get('/messvendors', messvendorsHandler)
router.get('/confirmmess/:param1', confirmmessHandler)
router.get('/livemenu/:param1', livemenuHandler)
router.get('/authenticate', authenticateHandler)
router.get('historyhandler', historyHandler)

module.exports = router
