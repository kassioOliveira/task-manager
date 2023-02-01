const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controller/UserController");

const userController = new UserController();

UserRouter.post('/',userController.create);


module.exports = UserRouter;