const routes = require("express").Router();
const TaskController = require("../controler/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
//quando um parametro é enviado pela rota ele é em formato string
routes.post("/updateOneTask/:id", TaskController.updateOneTask);
routes.get("/deleteOneTask/:id", TaskController.deleteOneTask);

module.exports = routes;
