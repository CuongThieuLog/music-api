const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Music extends Model {}

Music.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "music",
    timestamps: false,
  }
);

module.exports = Music;
