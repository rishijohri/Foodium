const express = require("express")
const router = express.Router()
const { confirmmessHandler, changepinHandler } = require("./changepin.js")
const {authenticateHandler, hashHandler, hashcompHandler} = require('../authenticateHandler')
const feedbackHandler = require("../mess/feedbackHandler")
const {findPrices, changePrices} = require("./changeprice.js")

router.get('/confirmmess/:param1', hashHandler, confirmmessHandler)
router.post('/changepin', hashHandler, changepinHandler)
router.get('/getprice/:param1', hashHandler, findPrices)
router.post('/changeprice', changePrices)
module.exports = router