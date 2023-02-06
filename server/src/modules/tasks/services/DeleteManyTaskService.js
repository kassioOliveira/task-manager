const Task = require("../model/Task");

class DeleteManyTaskService {

    async deleteManyTask(ids,user){

        try {
            const tasks = await Task.deleteMany({user_id:user.id,_id:{$in:ids}});

            return tasks;
        } catch (error) {
            throw new Error({error:error.message});
        }
    }
}

module.exports = DeleteManyTaskService;