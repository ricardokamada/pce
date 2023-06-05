const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cidade = sequelize.define('Cidade', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
  },
  nomes_cidade: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true,
  },
});

Cidade.hasMany(Entidade_juridica, {
  foreignKey: 'cidadeId', // chave estrangeira da tabela Entidade_juridica
  as: 'entidadesJuridicas', // nome da propriedade que será adicionada ao objeto Cidade
});

module.exports = Cidade;
