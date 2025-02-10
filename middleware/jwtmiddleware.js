const jwt = require("jsonwebtoken")

const jwtmiddleware =(req,res,next)=>{
    console.log(("inside jwtmiddleware"));
    const token= req.headers.authorization.split(" ")[1]
    console.log(token);
    
    if(token)
    {
        try {
            const jwtRes = jwt.verify(token,process.env.JWTKEY)
            req.userID = jwtRes
            console.log("jwtRes.userID:",jwtRes);
            next()
        } catch (error) {
            res.status(406).json("invalid token")
        }
    }
    else{
        res.status(404).json("no token...")
    }
}

module.exports = jwtmiddleware