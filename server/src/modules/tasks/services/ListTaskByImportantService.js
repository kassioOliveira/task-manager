const Task = require("../model/Task");

class ListTaskByImportant {

    async importantTask(id){

        try {
            const tasks = await Task.find({user_id:id,important:true});

             return tasks;
        } catch (error) {
            console.log(error)
            throw new Error(error.message);
        }
    }
}

module.exports = ListTaskByImportant;