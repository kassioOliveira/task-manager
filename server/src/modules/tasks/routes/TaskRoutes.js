const express = require("express");
const isAuthenticated = require("../../../shared/middlewares/isAuthenticated");
const taskRoutes = express.Router();

const TaskController = require("../controller/TaskController");
const taskController = new TaskController();

taskRoutes.post("/",isAuthenticated,taskController.create);
taskRoutes.get("/",isAuthenticated,taskController.listAll);
taskRoutes.get("/:id",isAuthenticated,taskController.listById);
taskRoutes.get("/date/:date",isAuthenticated,taskController.listByDate);

module.exports = taskRoutes;