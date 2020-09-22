const pool = require('../lib/db');
const router = require("express").Router();
const bcrypt = require("bcrypt")

router.post("/register", async (req, res) =>{
    try {
        const {name,email,password} = req.body;
        const user = await pool.query("SELECT * FROM users WHERE user_email =$1", [email]);
        
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcryptPassword = await bcrypt.hash(password, salt);
        
        const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword]);

        res.json(user.rows);
    } catch (error) {
        console.log("error.message");
        res.send(500)("Server Error")
    }
});

module.exports = router;