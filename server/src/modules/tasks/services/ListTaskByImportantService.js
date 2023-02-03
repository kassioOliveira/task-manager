const Task = require("../model/Task");

class ListTaskByImportant {

    async importantTask(){

        try {
            const tasks = await Task.find({important:true});

             return tasks;
        } catch (error) {
            console.log(error)
            throw new Error(error.message);
        }
    }
}

module.exports = ListTaskByImportant;