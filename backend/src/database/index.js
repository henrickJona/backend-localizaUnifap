const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Users = require("../app/models/Users");
const Events = require("../app/models/Events");
const Buildings = require("../app/models/Buildings");
const Categories = require("../app/models/Categories");

const connection = new Sequelize(dbConfig);

Users.init(connection);

Buildings.init(connection);
Categories.init(connection);
Events.init(connection);
Buildings.associate(connection.models);
Events.associate(connection.models);

module.exports = connection;
