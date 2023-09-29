const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rising extends Model {}

Rising.init(
  {
    rising_sign: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "rising"
  }
);


module.exports = Rising;