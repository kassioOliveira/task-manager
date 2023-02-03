const Task = require("../model/Task");


class ListTaskMyDayService {

    async listTaskMyDay() {
        try {
            const tasks = await Task.find({ my_day: true });

            return tasks
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = ListTaskMyDayService;