const { DataTypes } = require('sequelize');
const db = require('../database/db.js');

const SolicitudModel = db.define('Solicitudes', {
  id_solicitud: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_ayudantia: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Ayudantias',
      key: 'id_ayudantia'
    }
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id_usuario'
    }
  },
  fecha: {
    type: DataTypes.DATE
  },
  estado: {
    type: DataTypes.STRING(50)
  },
  id_periodo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Periodos',
      key: 'id_periodo'
    }
  },
  prioridad: {
    type: DataTypes.INTEGER
  },
  promedio_asignatura: {
    type: DataTypes.FLOAT
  },
  anteriormente_ayudante: {
    type: DataTypes.BOOLEAN
  }
});

module.exports = SolicitudModel;
