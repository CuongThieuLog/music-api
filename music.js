const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Music extends Model {}

Music.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    single: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "music",
  }
);

module.exports = Music;
