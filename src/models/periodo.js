const { DataTypes } = require('sequelize');
const db = require('../database/db.js');

const PeriodoModel = db.define('Periodos', {
  id_periodo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo: {
    type: DataTypes.INTEGER
  },
  fecha_inicio: {
    type: DataTypes.DATE
  },
  fecha_fin: {
    type: DataTypes.DATE
  }
});

module.exports = PeriodoModel;
