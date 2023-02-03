const Task = require("../model/Task");

class ListTaskService {
    
    async listTask(id) {
        try {
            const tasks = await Task.find({user_id:id});
            return tasks;
        } catch (error) {
            throw new Error({error:error.message});
        }
    }
}

module.exports = ListTaskService;