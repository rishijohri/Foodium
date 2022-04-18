const express = require("express")
const router = express.Router()
const livereviewHandler = require('./livereviewHandler')
const {messvendorsHandler, messitemsHandler} = require('./messvendorsHandler')
const confirmmessHandler = require('./confirmmessHandler')
const { livemenuHandler, uploadimageHandler, updateimageHandler } = require("./livemenuHandler")
const {authenticateHandler, hashHandler, hashcompHandler} = require("../authenticateHandler")
const {historyHandler,payEatHandler}=require("./paymentHandler")
const feedbackHandler = require("./feedbackHandler")

router.post('/payeat',hashHandler, payEatHandler)
router.post('/feedback',hashHandler, feedbackHandler)
router.post('/updateimage',hashHandler, updateimageHandler)
router.post('/uploadimage',hashHandler, uploadimageHandler)
router.get('/livereview/:param1',hashHandler, livereviewHandler)
router.get('/messvendors',hashHandler, messvendorsHandler)
router.get('/confirmmess/:param1', hashHandler, confirmmessHandler)
router.get('/livemenu/:vendor/:day/:time',hashHandler, livemenuHandler)
router.get('/historyhandler',hashHandler, historyHandler)
router.get('/getmenu/:vendor/:day/:time', hashHandler, messitemsHandler)
module.exports = router
