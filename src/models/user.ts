import { DataTypes, Model } from "sequelize";

import { sequelize } from "./sequelize";

class User extends Model {
  public readonly id!: number;

  public userId!: string;
  public userName!: string;
}
User.init(
  {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "User",
    tableName: "users",
    paranoid: true,
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default User;
