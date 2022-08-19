const Sequelize = require("sequelize");
const config = require("../config/config.json")[process.env.NODE_ENV];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
