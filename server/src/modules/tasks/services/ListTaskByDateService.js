const Task = require("../model/Task");
const moment = require("moment");


class ListTaskByDateService {

    //bug
    
    async listTaskByDate(date){

      
        try {
            
            const task = await Task.find({created_at:{$gte:new Date(2023,2,1),$lte:new Date(2023,2,2)}});
           console.log(task);
            return task;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    //final do bug
  
}

module.exports = ListTaskByDateService;