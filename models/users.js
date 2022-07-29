'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User name must not be empty'
        },
        notEmpty: { 
          msg: 'User must have a name'
        }
      }
    },
    password:  {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'password name must not be empty'
        },
        notEmpty: { 
          msg: 'password must have a name'
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      allowNull: true
    },
    status:{
      type:  DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    email: {
      type:DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: {
          msg: 'Email must be valid'
        }
      }
    },
    role:  {
      type:DataTypes.STRING,
      allowNull: false,
      defaultValue: "user"
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};