'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student_details.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name must not be empty'
        },
        notEmpty: { 
          msg: 'Name must have a name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: {
          msg: 'Email must be valid'
        }
      }
    },
    dob: {
      type:DataTypes.DATEONLY,
      allowNull: false
    },
    blood_group: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    identification_mark: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'student_details',
  });
  return student_details;
};