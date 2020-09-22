const router = require("express").Router();

router.post("/register", async (req, res) =>{
    try {
        res.send("Register");
    } catch (error) {
        console.log("error.message");
        res.send(500)("Server Error")
    }
})

module.exports = router;