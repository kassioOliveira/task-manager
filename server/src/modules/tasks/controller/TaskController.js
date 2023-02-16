const CreateTaskService = require("../services/CreateTaskService");
const ListTaskService = require("../services/ListTaskService");
const LisTaskByIdService = require("../services/ListTaskByIdService");
const ListTaskByDateService = require("../services/ListTaskByDateService");
const ListTaskByImportant = require("../services/ListTaskByImportantService");
const ListTaskMyDayService = require("../services/ListTaskMyDayService");
const UpdateTaskService = require("../services/UpdateTaskService");
const ListTaskCompletedService = require("../services/ListTaskCompletedService");
const DeleteManyTaskService = require("../services/DeleteManyTaskService");

const mongoose = require("mongoose")

const Task = require("../model/Task");
const DeleteTaskService = require("../services/DeleteTaskService");

class TaskController {

    async create(req, res) {
        const { id } = req.user;
        const data = req.body;

        data.user_id = id;

        if (!data.title) {
            return res.status(403).json({ error: "A task não pode ser criada sem um title!" });
        }

        const createTaskService = new CreateTaskService();
        try {
            const task = await createTaskService.createTask(data);

          return  res.status(201).json({response:task});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }

    }

    async listAll(req,res){
        const { id } = req.user;

        const listTaskService = new ListTaskService()

        try {
            const tasks = await listTaskService.listTask(id);

            return res.status(200).json({response:tasks});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }
    }

    async listById (req,res){

        const {id} = req.params;
        const user = req.user;

        if(!id){
            return res.status(400).json({error:"Id da task inválido!"});
        }

        const listTaskByIdService = new LisTaskByIdService();
        try {
            const task = await listTaskByIdService.listById(id,user);

            if(!task){
                return res.status(404).json({});
            }

            return res.status(200).json({response:task});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }

    }


  
    async listByDate(req,res){
        const {start,end} = req.params;
        const user = req.user;

        const regex = /^\d{4}\-([1-9]|1[012])\-([1-9]|[12][0-9]|3[01])$/;

        if( !start.match(regex) || !end.match(regex)){
            return res.status(400).json({error:"A data de início e fim deve estar no formato, aaaa-m-d"});
        }

        if(!start || !end){
            return res.status(400).json({error:" A data de início e fim é necessária na requisição"});
        }

        const listTaskByDateService = new ListTaskByDateService();

        try {
            const task = await listTaskByDateService.listTaskByDate(start,end,user);

            return res.status(200).json({response:task});
            
        } catch (error) {
            return res.status({error:error.message});
        }
    }

    async listByImportant(req,res){

        const {id} = req.user;

        const listTaskByImportant = new ListTaskByImportant();
        try {
            const tasks = await listTaskByImportant.importantTask(id);

            return res.status(200).json({response:tasks});
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:error.message});
        }
    }

    async listMyDay(req,res){

        const {id} = req.user;

        const listTaskMyDayService = new ListTaskMyDayService();

        try {
            const tasks = await listTaskMyDayService.listTaskMyDay(id);
    
            return res.status(200).json({response:tasks});
        } catch (error) {
            return res.status(500).json({error:error});
        }
    }

    async listCompleted(req,res){
        const user = req.user;

        const listTaskCompleted = new ListTaskCompletedService()
        try {
            const tasks = await listTaskCompleted.listTaskCompleted(user);

            return res.status(200).json({response:tasks});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }
    }

    async update(req,res){
        const user = req.user;
        const {id} = req.params;
        const data = req.body;
        const updateTaskService = new UpdateTaskService();

        if(!id){
            return res.status(400).json({error:"Id necessário para essa requisição!"});
        }

        if(!data){
            return res.status(400).json({error:"Você não declarou nenhum campo para ser atualizado!"});
        }

        try {

            const taskExists = await Task.findOne({_id:id});

            if(!taskExists){
                return res.status(404).json({error:"Essa Task não existe!"});
            }

            await updateTaskService.updateTask(id,user,data);

            return res.status(200).json({response:"Task atualizada!"});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }
    }

    async deleteMany(req,res) {
        const {tasks_id} = req.body;
        const user = req.user;

        const deleteManyTaskService = new DeleteManyTaskService();

        try {
       
           const allTasks = await Task.find({user_id:user.id ,_id:{$in:tasks_id}});

           const validIds = allTasks.map((el)=>{
            return el._id.toString();
           }); 

           if(!validIds.length){
            return res.status(404).json({error:"As Tasks não podem ser deletadas, pois elas não existem"});
           }

          await deleteManyTaskService.deleteManyTask(validIds,user);

           const deletedWithSuccess = tasks_id.map((el)=>{
            if(validIds.includes(el)){
                return {id:el,deleted:true};
            }else{
              return {id:el,deleted:false,error:"Id inválido!"};i
            }
          });
           
            return res.status(200).json({response:deletedWithSuccess});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }

    }

    async delete(req,res){
        const user = req.user;
        const {id} = req.params;

        const deleteTaskService = new DeleteTaskService();

        try {
            const taskToDelete = await Task.findOne({user_id:user.id,_id:id});

            if(!taskToDelete){
                return res.status(404).json({error:" A Task não pode ser deletada, pois ela não existe!"});
            }

           await deleteTaskService.DeleteTask(taskToDelete._id.toString(),user);

            return res.status(200).json({response:{id:taskToDelete._id.toString(),deleted:true}});

        } catch (error) {
            return res.status(500).json({error:error.message});
        }
    }


}

module.exports = TaskController;