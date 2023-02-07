const  mongoose  = require("mongoose");
const Task = require("../../tasks/model/Task");


class AddTaskToListService {
     
    async addTaskToList(user,taskId,listId){

        try {
            const taskAdd = await Task.updateOne({user_id:user.id,_id:taskId},{list_id:listId});

            return taskAdd;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = AddTaskToListService;