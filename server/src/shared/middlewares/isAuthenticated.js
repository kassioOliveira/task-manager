const jwt = require("jsonwebtoken");

  async function  isAuthenticated(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error:"JWT token necessário!"});
    }

    const [, token] = authHeader.split(' ');

    try {

        const decodedUser = jwt.verify(token,process.env.JWT_SECRET);

        req.user = decodedUser;
        
        next();
        
    } catch (error) {
        return res.status(400).json({error:"JWT token inválido!"})
    }

  }


module.exports = isAuthenticated;