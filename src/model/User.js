const User = ( Sequelize, DataTypes ) => {    
    const model = Sequelize.define(
        process.env.DB_TABLE_USER,
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            nickname: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            salt: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING(2),
                allowNull: false,
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
            tableName: process.env.DB_TABLE_USER,
            freezeTableName: true,
        }
    );
    return model;
}

module.exports = User;