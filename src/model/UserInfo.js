const UserInfo = ( Sequelize, DataTypes ) => {    
    const model = Sequelize.define(
        process.env.DB_TABLE_USER_INFO,
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            contact: {
                type: DataTypes.STRING(13),
                defaultValue: "",
            },
            birth: {
                type: DataTypes.STRING(10),
                defaultValue: "1950-01-01",
            },
            address: {
                type: DataTypes.TEXT('medium'),
            },
            job: {
                type: DataTypes.STRING(50),
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
            tableName: process.env.DB_TABLE_USER_INFO,
            freezeTableName: true,
        }
    );
    return model;
}

module.exports = UserInfo;