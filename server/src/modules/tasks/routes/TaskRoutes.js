const express = require("express");
const isAuthenticated = require("../../../shared/middlewares/isAuthenticated");
const taskRoutes = express.Router();

const TaskController = require("../controller/TaskController");
const taskController = new TaskController();

taskRoutes.use(isAuthenticated);

taskRoutes.post("/",taskController.create);

module.exports = taskRoutes;