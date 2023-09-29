const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Moon extends Model {}

Moon.init(
  {
    moon_sign: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "moon"
  }
);


module.exports = Moon;