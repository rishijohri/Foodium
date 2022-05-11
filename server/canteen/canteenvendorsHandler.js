const Canteen = require('../models/canteen')

function canteenvendorsHandler(_req, res) {
    console.log('entered canteen vendors')
    Canteen.find({}, (err, items) => {
        if (!err && items) {
            res.json({
                result: "success",
                vendors: items.map(a => {return {'label': a.vendor, 'value': a.vendor}})
            })
        }
        else {
            res.status(500).send('An error occurred', err);
        }
    });
}



module.exports =  {
    canteenvendorsHandler,
    
}