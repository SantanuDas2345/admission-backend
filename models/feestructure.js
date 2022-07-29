'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeeStructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FeeStructure.init({
    std: DataTypes.STRING,
    admission: DataTypes.INTEGER,
    monthly: DataTypes.INTEGER,
    identity: DataTypes.INTEGER,
    sports: DataTypes.INTEGER,
    transport: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'fee_structure',
    modelName: 'FeeStructure',
  });
  return FeeStructure;
};