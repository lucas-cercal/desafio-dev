const {DataTypes} = require('sequelize');

const db = require('../db/conn');

const File = db.define('File', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  card: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  hour: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  storeowner: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  storename: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = File;
