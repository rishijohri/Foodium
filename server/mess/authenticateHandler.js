

const authenticateHandler = (req, res) => {
    console.log("entered " + "/authenticate")
    if (req.isAuthenticated()) {
        console.log('logged in authenticate')
        res.json({
            result: "success",
            username: req.user.username,
            position: req.user.position,
            src: "auth" 
        })
    } else {
        console.log('not logged')
        res.json({
            result: "error",
            src: "auth"
        })
    }
    console.log("exited " + "/authenticate")
}

module.exports =  authenticateHandler