const { DataTypes } = require("sequelize");
const db = require('../database/db');

const PeriodoModel = db.define('Periodo', {
  id_periodo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },

  tipo: DataTypes.INTEGER,
  fecha_inicio: DataTypes.DATE,
  fecha_fin: DataTypes.DATE
});

module.export = { PeriodoModel }

