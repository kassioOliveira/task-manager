const { default: mongoose } = require("mongoose");
const Task = require("../../tasks/model/Task");
const AddTaskToListService = require("../service/AddTaskToListService");
const CreateListService = require("../service/CreateListService");
const ListOfListService = require("../service/ListOfListService");

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

   async show(req,res){

    const user = req.user;

    const listOfListService = new ListOfListService();

    try {
        const lists = await listOfListService.showLists(user)

        if(!lists.length){
            return res.status(404).json([]);
        }

        return res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
   }

   async addTask(req,res){

    const user = req.user;
    const {task_id,list_id} = req.body;

    let value = mongoose.isObjectIdOrHexString(list_id)
    console.log(value)


    const lId = mongoose.Types.ObjectId(list_id)

    if(!task_id){
        return res.status(400).json({error:"Id da Task necessário!"});
    }

    const addTaskToListService = new AddTaskToListService();

    

    try {

        const taskExists = await Task.find({user_id:user.id,_id:task_id});

        if(!taskExists.length){
            return res.status(404).json({error:"A Task não existe!"});
        }

     await addTaskToListService.addTaskToList(user,task_id,list_id);

        return res.status(200).json({response:"Task adicionada com sucesso!"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   }
}

module.exports = ListController;