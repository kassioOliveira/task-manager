const User = require("../models/User.js");
const CreateUserService = require("../services/CreateUserService");

class UserController {
   
  async  create(req, res){
    const {name, email, password} = req.body;

    if(!name, !email, !password){
       return res.status(406).json({error: "Preencha todos os campos!"});
    }

    const userExists = await User.findOne({email:email});

    if (userExists){
        return res.status(403).json({error:"Este usuário já existe!"});
    }
    const createUserService = new CreateUserService();

    try {
     const user = await createUserService.createUser(name,email,password);
      return res.status(201).json(user);
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message});
    }
  }
}

module.exports = UserController;