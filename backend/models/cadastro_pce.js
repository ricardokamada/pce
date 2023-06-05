const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tipo_coleta = require('../models/tipo_coleta'); // Importe o modelo Tipo_coleta
const Entidade_juridica = require('../models/entidade_juridica'); // Importe o modelo Entidade_juridica

const Cadastro_pce = sequelize.define('Cadastro_pce', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cadastro_pce_data: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false,
  },
  cadastro_pce_horario: {
    type: DataTypes.TIME,
    allowNull: false,
    unique: false,
  },
  cadastro_pce_distancia: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false,
  },
  cadastro_pce_bolsas_coletadas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
});

Cadastro_pce.belongsTo(Tipo_coleta, {
  foreignKey: 'tipoColetaId', // chave estrangeira da tabela Cadastro_pce
  as: 'tipoColeta', // nome da propriedade que será adicionada ao objeto Cadastro_pce
});

Cadastro_pce.belongsTo(Entidade_juridica, {
  foreignKey: 'entidadeJuridicaId', // chave estrangeira da tabela Cadastro_pce
  as: 'entidadeJuridica', // nome da propriedade que será adicionada ao objeto Cadastro_pce
});

module.exports = Cadastro_pce;
