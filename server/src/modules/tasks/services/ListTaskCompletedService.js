const Task = require("../model/Task");

class ListTaskCompletedService {

  async  listTaskCompleted(user){

    try {
        const tasks = await Task.find({user_id:user.id,completed:true});
        return tasks;
    } catch (error) {
        throw new Error({error:error.message});
    }
    }

}

module.exports = ListTaskCompletedService;