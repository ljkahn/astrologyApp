const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sun extends Model {}

Sun.init(
  {
    sun_sign: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "sun"
  }
);


module.exports = Sun;