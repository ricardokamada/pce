const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tipo_coleta = sequelize.define('Tipo_coleta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
  },
  tipo_coleta: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true,
  },
});

module.exports = Tipo_coleta;
