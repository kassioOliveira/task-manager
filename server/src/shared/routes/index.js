const express = require("express");
const UserRouter = require("../../modules/users/routes/UserRoutes");
const routes = express.Router();


routes.use("/users",UserRouter);

module.exports = routes;