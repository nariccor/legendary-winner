const pool = require('../lib/db');
const router = require("express").Router();

router.post("/register", async (req, res) =>{
    try {
        const {name,email,password} = req.body;
        const user = await pool.query("SELECT * FROM users WHERE user_email =$1", [email]);
        
        res.json(user.rows);
    } catch (error) {
        console.log("error.message");
        res.send(500)("Server Error")
    }
});

module.exports = router;