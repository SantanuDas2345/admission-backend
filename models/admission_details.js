'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admission_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admission_details.init({
    student_id: DataTypes.STRING,
    class: DataTypes.STRING,
    section: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admission_details',
  });
  return admission_details;
};