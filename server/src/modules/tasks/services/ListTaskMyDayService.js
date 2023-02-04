const Task = require("../model/Task");


class ListTaskMyDayService {

    async listTaskMyDay(id) {
        try {
            const tasks = await Task.find({user_id:id, my_day: true });

            return tasks
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = ListTaskMyDayService;