const User = require('../models/user')

const signoutHandler =  (req, res) => {
    console.log('entered logout')
    if (req.isAuthenticated()) {
        console.log(req.user)
        req.logOut();
        res.json({
            result:"success"
        })
    } else {
        res.json({
            result:'success'
        })
    }
}

const signinHandler = (req, res) => {
    console.log('entered signin')
    console.log(req.user)
    res.json({
        result: "success"
    })
}

const signupHandler = (req, res) => {
    console.log('entered signup')
    var balance = 0;
    User.register(new User({
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        agreement: req.body.agreement,
        position: req.body.position,
        balance: balance
    }), req.body.password, function (err, newUser) {
        if (err) {
            console.log(err)
            res.json({
                result: "error",
                nav: "/sign-up",
                error: err,
                src: "signup"
            })
        } else {
            passport.authenticate("custom")
                (req, res, () => {
                    res.json({
                        result: "success",
                        nav: "/secret",
                        src: "signup"
                    })
                })
        }
    });
}

const failHandler = (req, res) => {
    console.log('entered fail')
    res.json({
        result: "fail"
    })
}

module.exports = {
    signinHandler,
    signupHandler,
    signoutHandler,
    failHandler
}