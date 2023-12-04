const { DataTypes } = require('sequelize');
const db = require('../database/db.js');

const Ayudantia = db.define('Ayudantias', {
  id_ayudantia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_asignatura: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Asignaturas',
      key: 'id_asignatura',
    },
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id_usuario',
    },
  },
  cupos: {
    type: DataTypes.INTEGER,
  },
  horas: {
    type: DataTypes.INTEGER,
  },
  estado: {
    type: DataTypes.STRING(50),
  },
  id_periodo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Periodos',
      key: 'id_periodo',
    },
  },
});

module.exports = Ayudantia;
