const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,

      primaryKey: true,

      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        isEmail: true,
      },
    },

    message: {
      type: DataTypes.TEXT,

      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },

    updatedAt: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,

    modelName: 'Message',

    tableName: 'messages',
  }
);

module.exports = Message;
