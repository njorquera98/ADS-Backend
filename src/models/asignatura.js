// asignatura.model.js
const { DataTypes } = require('sequelize');
const db = require('../database/db.js');

const Asignatura = db.define('Asignaturas', {
  id_asignatura: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo: {
    type: DataTypes.STRING(50),
  },
  nombre: {
    type: DataTypes.STRING(255),
  },
  letra: {
    type: DataTypes.CHAR(1),
  },
});

module.exports = Asignatura;
