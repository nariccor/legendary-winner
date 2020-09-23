const jwt = require("jsonwebtoken");
require('dotenv').config();

const authorization = async(req,res,next) =>{
    try {
        const token = req.header("auth-token");
        if(!token) {
            return res.status(403).json("Not Authorize");
        }
        const payload = jwt.verify(token, process.env.SECRET_JWT);
        req.user = payload.user;
        next();

    } catch (error) {
        console.log(error.message);
        return res.status(403).json("Your session is not valid");
    }
}

module.exports = authorization;