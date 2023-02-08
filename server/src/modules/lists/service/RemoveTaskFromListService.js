const Task = require("../../tasks/model/Task");


class RemoveTaskFromListService {

   async removeOne(taskId,user,listId) {

    try {
        const task = await Task.updateOne({user_id:user.id,_id:taskId,list_id:listId},{list_id:""});
        return task
    } catch (error) {
        throw new Error(error.message);
    }

   }
}

module.exports = RemoveTaskFromListService;