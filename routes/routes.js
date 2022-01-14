const routes = require("express").Router();
const TaskController = require("../controler/TaskController")

routes.get("/", TaskController.getAll)

module.exports = routes