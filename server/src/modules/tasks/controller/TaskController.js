const CreateTaskService = require("../services/CreateTaskService");

class TaskController {

    async create(req, res) {
        const { id } = req.user;
        const data = req.body;

        data.user_id = id;

        if (!data.title) {
            return res.status(403).json({ error: "A task não pode ser criada sem um title!" });
        }

        const createTaskService = new CreateTaskService();
        try {
            const task = await createTaskService.createTask(data);

          return  res.status(201).json({response:task});
        } catch (error) {
            return res.status(500).json({error:error.message});
        }

    }
}

module.exports = TaskController;