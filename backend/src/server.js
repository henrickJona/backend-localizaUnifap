const express = require("express");
require('dotenv').config()
/* import express from 'express'
import routes from './routes' */
const routes = require("./routes");
/* import 'dotenv/config'; */
/* import database from './database' */
require("./config/database");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT ||5000);
/* app.listen(8080);  */
/* export default server; */