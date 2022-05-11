const Announcement = require('../models/announcement')

const announcementHandler = (req, res) => {
    console.log(req.body)
    Announcement.create(
        req.body, (err, doc) => {
            if (err || doc == null) {
                console.log(err)
                console.log(doc)
                res.json({
                    result: 'fail'
                })
            } else {
                console.log('announced successfully')
                res.json({
                    result: "success"
                })
            }
        }
    )
}

const fetchAnnouncementHandler = (req, res) => {
    Announcement.find({}, (err, items) =>{
        if (!err && items) {
            console.log(items)
            res.json({
                result: "success",
                vendors: items.map(a => {return {'title': a.title, 
                'description': a.description, 
                'date':`${item['createdAt'].getDate()}/${item['createdAt'].getMonth() + 1}/${item['createdAt'].getFullYear()}`,
                'time':`${item['createdAt'].getHours()}:${item['createdAt'].getMinutes()}`}})
            })
        }
        else {
            res.status(500).send('An error occurred', err);
        }
    })
}

module.exports = {
    announcementHandler, 
    fetchAnnouncementHandler
}