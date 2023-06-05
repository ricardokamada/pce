const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cidade = require('./cidade'); // Importe o modelo Cidade

const Entidade_juridica = sequelize.define('Entidade_juridica', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  entidade_juridica_nome: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: false,
  },
  entidade_juridica_endereco: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: false,
  },
  entidade_juridica_cep: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false,
  },
  cidadeId: { // Chave estrangeira para Cidade
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cidade, // Nome do modelo referenciado
      key: 'id', // Nome da coluna referenciada
    },
  },
});

Entidade_juridica.belongsTo(Cidade, {
  foreignKey: 'cidadeId', // chave estrangeira da tabela Entidade_juridica
  as: 'cidade', // nome da propriedade que será adicionada ao objeto Entidade_juridica
});

Entidade_juridica.hasMany(Cadastro_pce, {
    foreignKey: 'entidadeJuridicaId', // chave estrangeira na tabela Cadastro_pce
    as: 'cadastrosPce', // nome da propriedade que será adicionada ao objeto Entidade_juridica
  });

module.exports = Entidade_juridica;
