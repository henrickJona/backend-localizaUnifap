const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Users = require("../app/models/Users");
const Events = require("../app/models/Events");
const Buildings = require("../app/models/Buildings");
const Categories = require("../app/models/Categories");

const connection = new Sequelize('postgres://rmsubgrhjhaefh:c2e98479f7d630d36544a4caaf55bac77e2c665616d628b1f5a1837acc672611@ec2-18-215-111-67.compute-1.amazonaws.com:5432/d29seue4u26p3r');

Users.init(connection);

Buildings.init(connection);
Categories.init(connection);
Events.init(connection);
Buildings.associate(connection.models);
Events.associate(connection.models);

module.exports = connection;
