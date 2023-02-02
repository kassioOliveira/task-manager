const express = require("express");
const userAuthRoutes = require("../../modules/users/routes/UserAuthRoutes");
const UserRouter = require("../../modules/users/routes/UserRoutes");
const routes = express.Router();


routes.use("/users",UserRouter);
routes.use("/user",userAuthRoutes);

module.exports = routes;