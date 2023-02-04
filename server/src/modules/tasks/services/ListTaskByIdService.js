const Task = require("../model/Task");

class LisTaskByIdService {

  async  listById(id,user) {

    try {
       const task = await Task.findOne({user_id:user.id,_id:id});
       
       return task;
    } catch (error) {
        throw new Error(error.message);
    }
  }
}

module.exports = LisTaskByIdService;