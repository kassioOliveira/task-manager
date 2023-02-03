const Task = require("../model/Task");

class LisTaskByIdService {

  async  listById(id) {

    try {
       const task = await Task.findOne({_id:id});
       
       return task;
    } catch (error) {
        throw new Error(error.message);
    }
  }
}

module.exports = LisTaskByIdService;