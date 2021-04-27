const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const UserController = require("./app/controllers/UserController");
const CategoriesController = require('./app/controllers/CategoriesController');
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/categorias',CategoriesController.store)
routes.post("/user", UserController.store);

//routes.post('/categorias', CategoriaController.store);

/* routes.get("/edificios", EdificioController.index);
routes.post("/edificios", EdificioController.store); */
/* 
routes.post("/edificios/:edificio_id/locais", LocalController.store); */

module.exports = routes;
