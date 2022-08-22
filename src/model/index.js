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

db.User = require("./User")(sequelize, Sequelize);
db.UserInfo = require("./UserInfo")(sequelize, Sequelize);
db.Goal = require("./Goal")(sequelize, Sequelize);
db.GoalRepeat = require("./GoalRepeat")(sequelize, Sequelize);
db.GoalTemp = require("./GoalTemp")(sequelize, Sequelize);

db.User.hasOne(db.UserInfo, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});
db.UserInfo.belongsTo(db.User, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});

db.User.hasMany(db.Goal, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});
db.Goal.belongsTo(db.User, {
    foreignKey: "user_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});

db.Goal.hasMany(db.GoalTemp, {
    foreignKey: "goal_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});
db.GoalTemp.belongsTo(db.Goal, {
    foreignKey: "goal_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});

db.Goal.hasMany(db.GoalRepeat, {
    foreignKey: "goal_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});
db.GoalRepeat.belongsTo(db.Goal, {
    foreignKey: "goal_id",
    sourceKey: "id",
    onDelete: "cascade",
    onUpdate: "cascade"
});

module.exports = db;
