const Task = require("../../tasks/model/Task");


class ListTaskOfListService{

    async taskOfList(listId,user){

        try {
            const tasks = await Task.find({user_id:user.id,list_id:listId});
            return tasks;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = ListTaskOfListService;