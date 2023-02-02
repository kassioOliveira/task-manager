const Task = require("../model/Task");


class CreateTaskService {

   async createTask(task) {

    try {
        const newTask = await Task.create(task);
    
        await newTask.save();
    
        return newTask;
    } catch (error) {
        return new Error(error.message);
    }
   }
}

module.exports = CreateTaskService;