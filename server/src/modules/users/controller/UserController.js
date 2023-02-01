const User = require("../model/User.js");
const CreateUserService = require("../services/CreateUserService");

class UserController {
   
  async  create(req, res){
    const {name, email, password} = req.body;

    if(!name || !email || !password){
       return res.status(406).json({error: "Preencha todos os campos!"});
    }

    const userExists = await User.findOne({email:email});

    if (userExists){
        return res.status(403).json({error:"Este usuário já existe!"});
    }

    const createUserService = new CreateUserService();

    try {
   await createUserService.createUser(name,email,password);
    
      return res.status(201).json({});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message});
    }
  }
}

module.exports = UserController;