const validation = async(req,res, next) => {
    const {name,email,password} = req.body;
    try {
        //username given & min length 3
        if(!req.body.name || req.body.name.length < 3){
            return res.status(400).send({
                msg: 'Please enter an username with min 3chars'
            });
        }
        //password given & min 6 chars
        if (!req.body.password || req.body.password.length <6){
            return res.status(400).send({
                msg:'Please enter a password with min. 6 chars'
            });
        }
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(403).json("Not Valid");
    }
};

module.exports = validation;
