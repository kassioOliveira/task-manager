const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class CreateUserService {

   async createUser(name,email,password) {

    try {

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password,salt);

        

        const user = await User.create({
            name:name,
            email:email,
            password: passwordHash,
        });

        const token = jwt.sign({id:user._id,email:user.email},
            process.env.JWT_SECRET, {
                expiresIn:'24h'
            });

         user.token = token;
        await user.save();
        return user;
       
    } catch (error) {
        console.log(error);
        return new Error(error.message);
    }
   }
};

module.exports = CreateUserService;