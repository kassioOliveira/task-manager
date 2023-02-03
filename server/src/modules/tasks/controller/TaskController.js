const CreateTaskService = require("../services/CreateTaskService");
const ListTaskService = require("../services/ListTaskService");
const LisTaskByIdService = require("../services/ListTaskByIdService");
const ListTaskByDateService = require("../services/ListTaskByDateService");

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

            if(!tasks.length){
                return res.status(404).json([]);
            }

            return res.status(200).json({response:tasks});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }
    }

    async listById (req,res){

        const {id} = req.params;

        if(!id){
            return res.status(400).json({error:"Id da task inválido!"});
        }

        const listTaskByIdService = new LisTaskByIdService();
        try {
            const task = await listTaskByIdService.listById(id);

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

        if(!start || !end){
            return res.status(400).json({error:" A data de início e fim é necessária na requisição"});
        }

        const listTaskByDateService = new ListTaskByDateService();

        try {
            const task = await listTaskByDateService.listTaskByDate(start,end);

            if(!task.length){
                return res.status(404).json([]);
            }

            return res.status(200).json({response:task});
            
        } catch (error) {
            return res.status({error:error.message});
        }
    }

}

module.exports = TaskController;