const express = require("express");
/* import express from 'express'
import routes from './routes' */
const routes = require("./routes");
/* import 'dotenv/config'; */
/* import database from './database' */
require("./database");
/* require('dotenv/config') */
const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT ||5000);
/* app.listen(8080);  */
/* export default server; */