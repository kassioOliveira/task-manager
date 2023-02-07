const express = require("express");
const isAuthenticated = require("../../../shared/middlewares/isAuthenticated");
const ListController = require("../controller/ListController");
const listRoute = express.Router();

const listController = new ListController()

listRoute.post("/",isAuthenticated, listController.create);


module.exports = listRoute;