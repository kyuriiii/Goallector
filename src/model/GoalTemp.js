const GoalTemp = ( Sequelize, DataTypes ) => {    
    const model = Sequelize.define(
        process.env.DB_TABLE_GOAL_TEMP,
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            deadline: {
                type: DataTypes.STRING(10),
                defaultValue: "1950-01-01",
                allowNull: false,
            },
            registered: {
                type: "TIMESTAMP",
                defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: process.env.DB_TABLE_GOAL_TEMP,
            freezeTableName: true,
        }
    );
    return model;
}

module.exports = GoalTemp;