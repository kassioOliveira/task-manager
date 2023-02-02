const express = require("express");
const userAuthRoutes = express.Router();
const UserController = require("../controller/UserController");

const userController = new UserController();

userAuthRoutes.post('/login',userController.login);

module.exports = userAuthRoutes;