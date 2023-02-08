const { default: mongoose } = require("mongoose");
const Task = require("../../tasks/model/Task");
const AddManyTaskToListService = require("../service/AddManyTaskToListService");
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

   async addManyTasksToList(req,res){

    const user = req.user;
    const {list_id} = req.params;
    const {tasks_ids} = req.body;

    if(!tasks_ids.length){
        return res.status(400).json({error:"Campo ids inválido!"});
    }

    const addManyTaskToListService = new AddManyTaskToListService()

    try {
        const allTasks = await Task.find({user_id:user.id ,_id:{$in:tasks_ids}});

           const validIds = allTasks.map((el)=>{
            return el._id.toString();
           }); 

           if(!validIds.length){
            return res.status(404).json({error:"As Tasks não podem ser adicionadas, pois elas não existem"});
           }

        await addManyTaskToListService.addManyTaskToList(user,tasks_ids,list_id);

        const addWithSuccess = tasks_ids.map((el)=>{
            if(validIds.includes(el)){
                return {id:el,add:true};
            }else{
              return {id:el,add:false,error:"Id inválido!"};
            }
          });

          return res.status(200).json({response:addWithSuccess});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
   }
}

module.exports = ListController;