const User = require("../model/User");
const jwt = require("jsonwebtoken");

class GenerateTokenService {
    
  async  generate(id){

    try {
      
        const user = await User.findOne({_id:id});
  
   const token =  jwt.sign({id:user._id, email:user.email},
    process.env.JWT_SECRET,{expiresIn:'24h'});

    user.token = token;

   await user.save()

    const userResponse = {};
    userResponse._id = user._id;
    userResponse.email = user.email;
    userResponse.token = user.token;

    return userResponse;
    } catch (error) {
        throw new Error({error: error.message});
    }

    }
}

module.exports = GenerateTokenService;