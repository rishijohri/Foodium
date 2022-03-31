const Mess = require('../models/mess')

function messvendorsHandler(req, res) {
    console.log('entered messvendors')
    console.log("entered mess vendors")
    Mess.find({}, (err, items) => {
        if (!err && items) {
            res.json({
                result: "success",
                menuItems: items.map(a => {return {'label': a.vendor, 'value': a.vendor}})
            })
        }
        else {
            res.status(500).send('An error occurred', err);
        }
    });
}

module.exports =  messvendorsHandler