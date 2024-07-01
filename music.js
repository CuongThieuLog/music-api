const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Music extends Model {}

Music.init(
  {
    url: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
    },
    artwork: {
      type: DataTypes.STRING,
    },
    playlist: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: "music",
  }
);

module.exports = Music;
