'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class school_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  school_details.init({
    school_name: {
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

    est_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    medium: {
      type: DataTypes.STRING,
      allowNull:false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    }
  }, {
    sequelize,
    modelName: 'school_details',
  });
  return school_details;
};