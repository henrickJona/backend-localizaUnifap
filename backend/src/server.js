const express = require("express");
require('dotenv').config()
/* import express from 'express'
import routes from './routes' */
const routes = require("./routes");
const Sequelize = require("sequelize");
const dbConfig = require("../src/config/database");
/* import 'dotenv/config'; */
/* import database from './database' */
/* require("./database/index"); */
const cors = require('cors')
const Users = require("../src/app/models/Users");
const Events = require("../src/app/models/Events");
const Buildings = require("../src/app/models/Buildings");
const Categories = require("../src/app/models/Categories");

const connection = new Sequelize(process.env.DATABASE_URL,{ dbConfig});

connection.authenticate().then(()=>console.log('Connection has been established successfully.',)).catch((error)=>console.log('Unable to connect to the database:', error))
    
 
Users.init(connection);

Buildings.init(connection);
Categories.init(connection);
Events.init(connection);
Buildings.associate(connection.models);
Events.associate(connection.models);
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT ||5000);
/* app.listen(8080);  */
/* export default server; */