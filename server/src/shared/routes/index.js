const express = require("express");
const taskRoutes = require("../../modules/tasks/routes/TaskRoutes");
const userAuthRoutes = require("../../modules/users/routes/UserAuthRoutes");
const UserRouter = require("../../modules/users/routes/UserRoutes");
const routes = express.Router();


routes.use("/users",UserRouter);
routes.use("/user",userAuthRoutes);
routes.use("/tasks",taskRoutes);

module.exports = routes;