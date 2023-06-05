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

Tipo_coleta.hasMany(Cadastro_pce, {
  foreignKey: 'tipoColetaId', // chave estrangeira na tabela Cadastro_pce
  as: 'cadastrosPce', // nome da propriedade que será adicionada ao objeto Tipo_coleta
});

module.exports = Tipo_coleta;
