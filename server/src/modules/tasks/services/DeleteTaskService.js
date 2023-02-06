const Task = require("../model/Task");


class DeleteTaskService {

    async DeleteTask(id,user){

        try {
            const taskDeleted = await Task.deleteOne({user_id:user.id ,_id:id});

            return taskDeleted;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = DeleteTaskService;