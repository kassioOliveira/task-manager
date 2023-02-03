const Task = require("../model/Task");
const { startOfDay, endOfDay } = require("date-fns");


class ListTaskByDateService {
    
    async listTaskByDate(startDate,endDate){

      const startDay = new Date(startDate).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
      const endDay = new Date(endDate).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

        try {
            
            const task = await Task.find({'created_at':{$gte:startDay,$lt:endDay}});

            return task;
        } catch (error) {
            throw new Error(error.message);
        }
    }

  
}

module.exports = ListTaskByDateService;