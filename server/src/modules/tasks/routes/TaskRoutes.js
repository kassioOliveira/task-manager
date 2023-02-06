const express = require("express");
const isAuthenticated = require("../../../shared/middlewares/isAuthenticated");
const taskRoutes = express.Router();

const TaskController = require("../controller/TaskController");
const taskController = new TaskController();

taskRoutes.post("/",isAuthenticated,taskController.create);
taskRoutes.get("/",isAuthenticated,taskController.listAll);
taskRoutes.get("/task/:id",isAuthenticated,taskController.listById);
taskRoutes.get("/date/:start/:end",isAuthenticated,taskController.listByDate);
taskRoutes.get("/important",isAuthenticated,taskController.listByImportant);
taskRoutes.get("/myday",isAuthenticated,taskController.listMyDay);
taskRoutes.get("/completed",isAuthenticated,taskController.listCompleted);
taskRoutes.put("/task/:id",isAuthenticated,taskController.update);
taskRoutes.delete("/",isAuthenticated,taskController.deleteMany);
taskRoutes.delete("/task/:id",isAuthenticated,taskController.delete);

module.exports = taskRoutes;