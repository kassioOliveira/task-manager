const Task = require("../model/Task");

class UpdateTaskService {

    async updateTask(id,user,data){

        try {
            const task = await Task.updateOne({_id:id,user_id:user.id},data);

            return task;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = UpdateTaskService;