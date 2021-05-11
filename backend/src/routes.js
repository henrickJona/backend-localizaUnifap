const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const EventsController = require("./app/controllers/EventsController");
const CategoriesController = require('./app/controllers/CategoriesController');
const BuildingsController = require("./app/controllers/BuildingsController");
const authMidddleware = require("./middleware/auth");
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/categorias',CategoriesController.store)
routes.post("/user", UserController.store);
routes.post('/session', SessionController.store);
routes.post('/session/:email', SessionController.sendEmail);
routes.post('/session/mudarsenha/:id', authMidddleware,SessionController.mudarSenha);
routes.post('/buildings',BuildingsController.store);
routes.get('/buildings/:id',BuildingsController.index);
routes.get('/showbuildings',BuildingsController.show);
routes.post('/events', authMidddleware,EventsController.store);
routes.get('/events/:id',authMidddleware,EventsController.index);
routes.get('/showevents',EventsController.show);
routes.put('/events/:id',authMidddleware,EventsController.put);
routes.delete('/events/delete/:id',authMidddleware,EventsController.delete);
//routes.post('/categorias', CategoriaController.store);

/* routes.get("/edificios", EdificioController.index);
routes.post("/edificios", EdificioController.store); */
/* 
routes.post("/edificios/:edificio_id/locais", LocalController.store); */

module.exports = routes;
