const CanteenOrder = require('../models/canteenOrder')

const orderStatusHandler = async (req, res)=> {
    let order = await CanteenOrder.findOne({_id: req.body.orderid})
    if (!order || order===null) {
        res.json({
            result: 'fail',
        })
        return
    }
    order.orderStatus =req.body.response
    if (req.body.response==='reject') {
        
    }

    order.save()
    res.json({
        result: 'success'
    })
}

const getOrderHandler = async (req, res)=> {
    console.log('entered canteenvendor getorders')
    let vendor = req.params.vendor
    let orders = await CanteenOrder.find({vendor: vendor})
    if (!orders|| orders===null) {
        res.json({
            result: 'fail'
        })
        return
    }
    orders.reverse()
    res.json({
        result: 'success',
        orders: orders
    })
}

module.exports = {
    orderStatusHandler,
    getOrderHandler
}