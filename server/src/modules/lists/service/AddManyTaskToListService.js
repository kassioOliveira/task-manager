const Task = require("../../tasks/model/Task");


class AddManyTaskToListService {

  async  addManyTaskToList(user,tasksIds,listId){

    try {

        

        const tasks = await Task.updateMany({user_id:user.id,_id:{$in:tasksIds}},{list_id:listId});
        return tasks;
    } catch (error) {
        throw new Error(error.message);
    }
  }
}

module.exports = AddManyTaskToListService;