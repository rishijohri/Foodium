const MenuItem = require('../models/menuItem')

const livemenuHandler = (req, res) => {
    console.log('entered livemenu')
    const mess=req.params.param1
    console.log("live menu entered")
    console.log(mess)
    MenuItem.find({vendor:mess}, (err, items) => {
        if (!err && items) {
            res.json({
                result: "success",
                menuItems: items
            });
        }
        else {
            res.status(500).send('An error occurred', err);
        }
    });
}

const uploadimageHandler = (req, res) => {
    console.log("entered uploadimage")
    let obj = req.body 
    MenuItem.create(obj, (err, _item) => {
        if (err) {
            console.log("entered error")
            console.log(err);
            res.json({
                result:"fail"
            })
        }
        else {
            console.log("entered success")
            res.json({
                result:'success'
            })
        }
    });
}
module.exports =  {
    livemenuHandler,
    uploadimageHandler
}