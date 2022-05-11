const express = require("express")
const { addMenuItem } = require("./addmenuitem")
const { canteenitemsDelete, canteenitemsModify } = require("./canteenItemsHandler")
const router = express.Router()

router.post('/addmenuitem', addMenuItem)
router.post('/deleteitem', canteenitemsDelete)
router.post('/changeprice', canteenitemsModify)
module.exports = router