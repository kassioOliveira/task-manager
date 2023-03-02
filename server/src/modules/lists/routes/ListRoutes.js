const express = require("express");
const isAuthenticated = require("../../../shared/middlewares/isAuthenticated");
const ListController = require("../controller/ListController");
const listRoute = express.Router();

const listController = new ListController()

listRoute.post("/",isAuthenticated, listController.create);
listRoute.get("/",isAuthenticated,listController.show);
listRoute.get("/tasks/:list_id",isAuthenticated,listController.taskOfList);
listRoute.get("/:id",isAuthenticated,listController.showById);
listRoute.put("/",isAuthenticated,listController.addTask);
listRoute.put("/tasks/list/:list_id",isAuthenticated,listController.addManyTasksToList);
listRoute.put("/:id",isAuthenticated,listController.update);
listRoute.put("/tasks/:list_id",isAuthenticated,listController.removeManyTaskFromList);
listRoute.put("/task/:list_id/:task_id",isAuthenticated,listController.removeOneTaskFromList);
listRoute.delete("/lists",isAuthenticated,listController.deleteMany);
listRoute.delete("/:list_id",isAuthenticated,listController.delete);
module.exports = listRoute;