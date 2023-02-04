const Task = require("../model/Task");

class ListTaskByDateService {
    
    async listTaskByDate(startDate,endDate,user){

      const startDay = new Date(startDate).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
      const endDay = new Date(endDate).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

        try {
            
            const task = await Task.find({user_id:user.id,created_at:{$gte:startDay,$lt:endDay}});

            return task;
        } catch (error) {
            throw new Error(error.message);
        }
    }

  
}

module.exports = ListTaskByDateService;