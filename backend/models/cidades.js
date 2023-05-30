const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cidade = sequelize.define('Cidade', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
  },
  nomes_cidades: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true,
  },
});

module.exports = Cidade;
