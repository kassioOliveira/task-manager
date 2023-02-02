const User = require("../model/User.js");
const CreateUserService = require("../services/CreateUserService");
const bcrypt = require("bcrypt");
const GenerateTokenService = require("../services/GenerateTokenService");

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

  async login(req,res){

    const {password,email} = req.body;

    if(!password || !email){
      return res.status(406).json({error:"Preencha todos os campos!"});
    }

   try {
    const userExists = await User.findOne({email:email});

    if(!userExists){
        return res.status(404).json({error:"Usuário não encontrado!"})
    }

  const validPassword = await bcrypt.compare(password,userExists.password);

  if(!validPassword){
    return res.status(401).json({error:"Senha ou email inválidos!"});
  }

 const generateTokenService = new GenerateTokenService();

 const userResponse = await generateTokenService.generate(userExists._id);

 res.status(202).json({response:userResponse});

   } catch (error) {
    return res.status(500).json({error:error.message});
   }

  }
}

module.exports = UserController;