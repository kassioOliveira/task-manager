const CreateListService = require("../service/CreateListService");


class ListController {

   async create(req,res){

    const user = req.user;
    const {name} = req.body;

    if(!name){
        return res.status(400).json({error:"A list precisa de um nome!"});
    }

    const createList = {name:name,user_id:user.id};

    const createListService = new CreateListService();

    try {

       await createListService.createList(createList);

        return res.status(201).json({response:"Lista criada com sucesso!"});
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   }
}

module.exports = ListController;