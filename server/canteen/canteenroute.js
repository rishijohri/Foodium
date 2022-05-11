const express = require("express")
const { canteenvendorsHandler } = require("./canteenvendorsHandler")
const {canteenitemsFetch} = require('../canteenvendor/canteenItemsHandler')
const router = express.Router()


router.get('/getmenu/:vendor', canteenitemsFetch)

module.exports = router