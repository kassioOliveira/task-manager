const Task = require("../../tasks/model/Task");


class RemoveManyTaskFromListService {

  async  removeTaskFromList(taksIds,user,listId){

    try {
        const tasks = await Task.updateMany({user_id:user.id,list_id:listId,_id:{$in:taksIds}},{list_id:""});

        return tasks;
    } catch (error) {
        throw new Error(error.message);
    }

  }
}

module.exports = RemoveManyTaskFromListService;