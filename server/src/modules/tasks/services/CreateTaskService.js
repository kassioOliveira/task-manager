const Task = require("../model/Task");


class CreateTaskService {

   async createTask(title,description,user_id,list_id,important) {

    try {
        const newTask = await Task.create({
            title,
            description,
            user_id,
            list_id,
            important
        });
    
        await newTask.save();
    
        return newTask;
    } catch (error) {
        return new Error(error.message);
    }
   }
}

module.exports = CreateTaskService;