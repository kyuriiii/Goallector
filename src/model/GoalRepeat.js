const GoalRepeat = ( Sequelize, DataTypes ) => {    
    const model = Sequelize.define(
        process.env.DB_TABLE_GOAL_REPEAT,
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            day: {
                type: DataTypes.STRING(10),
                defaultValue: "",
                allowNull: false,
            },
            time: {
                type: DataTypes.STRING(10),
                defaultValue: "",
            },
            registered: {
                type: "TIMESTAMP",
                defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: process.env.DB_TABLE_GOAL_REPEAT,
            freezeTableName: true,
        }
    );
    return model;
}

module.exports = GoalRepeat;