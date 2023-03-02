const { default: mongoose } = require("mongoose");
const Task = require("../../tasks/model/Task");
const List = require("../model/List");
const AddManyTaskToListService = require("../service/AddManyTaskToListService");
const AddTaskToListService = require("../service/AddTaskToListService");
const CreateListService = require("../service/CreateListService");
const DeleteListService = require("../service/DeleteListService");
const DeleteManyListService = require("../service/DeleteManyListService");
const GetListByIdService = require("../service/GetListByIdService");
const ListOfListService = require("../service/ListOfListService");
const ListTaskOfListService = require("../service/ListTaskOfListService");
const RemoveManyTaskFromListService = require("../service/RemoveManyTaskFromListService");
const RemoveTaskFromListService = require("../service/RemoveTaskFromListService");
const UpdateListService = require("../service/UpdateListService");

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

     const list =  await createListService.createList(createList);

        return res.status(201).json({response:list});
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   }

   async show(req,res){

    const user = req.user;

    const listOfListService = new ListOfListService();

    try {
        const lists = await listOfListService.showLists(user)

        return res.status(200).json({response:lists});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
   }

   async showById(req,res){
    const {id} = req.params;
    const user = req.user;

    if(!id){
        return res.status(400).json({error:"Id da lista inválido!"});
    }

    const getListByIdService = new GetListByIdService();
    try {
        const task = await getListByIdService.listById(id,user);

        return res.status(200).json({response:task});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   }

   async update(req,res){
    const user = req.user;
    const {id} = req.params;
    const data = req.body;
    const updateListService = new UpdateListService();

    if(!id){
        return res.status(400).json({error:"Id necessário para essa requisição!"});
    }

    if(!data){
        return res.status(400).json({error:"Você não declarou nenhum campo para ser atualizado!"});
    }

    try {

        const listExists = await List.findOne({_id:id});

        if(!listExists){
            return res.status(404).json({error:"Essa Lista não existe!"});
        }

      const list =  await updateListService.updateList(id,user,data);

        return res.status(200).json({response:list});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}


   async addTask(req,res){

    const user = req.user;
    const {task_id,list_id} = req.body;

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

    const addManyTaskToListService = new AddManyTaskToListService();

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

   async taskOfList(req,res){

    const user = req.user;
    const {list_id} = req.params;

    const listTaskOfListService = new ListTaskOfListService();

    try {
        const tasks = await listTaskOfListService.taskOfList(list_id,user);

        return res.status(200).json({response:tasks})

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   }

   async removeManyTaskFromList(req,res){

    const {list_id} = req.params;
    const user = req.user;
    const {tasks_ids} = req.body;

    if(!tasks_ids.length){
        return res.status(400).json({error:"Campo ids inválido!"});
    }

    const removeManyTaskFromListService = new RemoveManyTaskFromListService();

    try {

        const allTasks = await Task.find({user_id:user.id,list_id:list_id,_id:{$in:tasks_ids}});

        const validIds = allTasks.map((el)=>{
         return el._id.toString();
        }); 

        if(!validIds.length){
         return res.status(404).json({error:"As Tasks não podem ser removidas, pois elas não existem na lista!"});
        }

     await removeManyTaskFromListService.removeTaskFromList(tasks_ids,user,list_id);

     const removedWithSuccess = tasks_ids.map((el)=>{
         if(validIds.includes(el)){
             return {id:el,removed:true};
         }else{
           return {id:el,removed:false,error:"Id inválido!"};
         }
       });

        return res.status(200).json({response:removedWithSuccess});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   }

   async removeOneTaskFromList(req,res){

    const user = req.user;
    const {list_id,task_id} = req.params;

    if(!list_id || !task_id){
        return res.status(401).json({error:"Os parâmentros lis_id e task_id são requeridos nessa requisição!"})
    }

    const removeTaskFromListService = new RemoveTaskFromListService();

    try {

        const taskExists = await Task.findOne({user_id:user.id,_id:task_id,list_id:list_id});

        if(!taskExists){
            return res.status(404).json({error:"Essa task não pode ser removida, pois ela não existe na lista!"})
        }

        const task = await removeTaskFromListService.removeOne(task_id,user,list_id);

        return res.status(200).json({response:{id:taskExists._id,removed:true}});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
   }

   async deleteMany(req,res) {
    const {list_ids} = req.body;
    const user = req.user;

    const deleteManyListService = new DeleteManyListService();

    try {
   
       const allLists = await List.find({user_id:user.id,_id:{$in:list_ids}});

       const validIds = allLists.map((el)=>{
        return el._id.toString();
       }); 

       if(!validIds.length){
        return res.status(404).json({error:"As Listas não podem ser deletadas, pois elas não existem"});
       }

      await deleteManyListService.deleteManyList(validIds,user);

       const deletedWithSuccess = list_ids.map((el)=>{
        if(validIds.includes(el)){
            return {id:el,deleted:true};
        }else{
          return {id:el,deleted:false,error:"Id inválido!"};
        }
      });
       
        return res.status(200).json({response:deletedWithSuccess});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message});
    }

}

async delete(req,res){
    const user = req.user;
    const {list_id} = req.params;

    const deleteListService = new DeleteListService();

    try {
        const listToDelete = await List.findOne({user_id:user.id,_id:list_id});

        if(!listToDelete){
            return res.status(404).json({error:" A Lista não pode ser deletada, pois ela não existe!"});
        }

       await deleteListService.DeleteList(listToDelete._id.toString(),user);

        return res.status(200).json({response:{id:listToDelete._id.toString(),deleted:true}});

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

}

module.exports = ListController;