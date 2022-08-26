const Goal = ( Sequelize, DataTypes ) => {    
    const model = Sequelize.define(
        process.env.DB_TABLE_GOAL,
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            open: {
                type: DataTypes.INTEGER.UNSIGNED,
                defaultValue: 2,
            },
            title: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            detail: {
                type: DataTypes.TEXT('medium'),
            },
            mode: {
                type: DataTypes.STRING(20),
                allowNull: false,
                default: 'hobby',
            },
            type: {
                type: DataTypes.STRING(20),
                allowNull: false,
                default: 'daily',
            },
            stage: {
                type: DataTypes.INTEGER.UNSIGNED,
                defaultValue: 1,
            },
            registered: {
                type: "TIMESTAMP",
                defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: process.env.DB_TABLE_GOAL,
            freezeTableName: true,
        }
    );
    return model;
}

module.exports = Goal;