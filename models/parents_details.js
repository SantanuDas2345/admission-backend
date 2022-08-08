'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parents_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  parents_details.init({
    // p_id: DataTypes.STRING,
    // student_id: DataTypes.STRING,
    father_name: {
     type: DataTypes.STRING,
     allowNull:false,
     validate: {
        notNull: {
          msg: 'Name must not be empty'
        },
        notEmpty: { 
          msg: 'Name must have a name'
        }

     }
    },
    mother_name:{
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: 'Name must not be null'
        },
        notEmpty: {
          msg: 'Must have a name'
        }
      }
    },

    father_occupation: {
      type: DataTypes.STRING,
      allowNull:false
    },

    mother_occupation: {
      type: DataTypes.STRING,
      allowNull:false
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull:true,
      validate: {
        isEmail: 'email must be valid'
      }
    }
  }, {
    sequelize,
    modelName: 'parents_details',
  });
  return parents_details;
};