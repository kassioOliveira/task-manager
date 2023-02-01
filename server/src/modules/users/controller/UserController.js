const User = require("../models/User");
const CreateUserService = require("../services/CreateUserService");

class UserController {
    #privateField;

    constructor(){
        this.#createUserService = new CreateUserService();
    }

  async  create(req, res){
    const {name, email, password} = req.body;

    if(!name, !email, !password){
       return res.status(406).json({error: "Preencha todos os campos!"});
    }

    const userExists = await User.find({email:email});

    if (userExists){
        return res.status(403).json({error:"Este usuário já existe!"});
    }

    try {
       await this.createUserService.createUser(name,email,password);
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message});
    }
  }
}

module.exports = UserController;