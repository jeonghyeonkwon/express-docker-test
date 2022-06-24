"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class User extends sequelize_1.Model {
}
User.init({
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    timestamps: true,
    underscored: true,
    modelName: "User",
    tableName: "users",
    paranoid: true,
    charset: "utf8",
    collate: "utf8_general_ci",
});
exports.default = User;
