const { DataTypes } = require('sequelize');
const db = require('../database/db.js');

const Estudiante = db.define('Estudiantes', {
  id_estudiante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id_usuario',
    },
  },
  nro_cuenta: {
    type: DataTypes.STRING(50),
  },
  tipo_cuenta: {
    type: DataTypes.STRING(50),
  },
  banco: {
    type: DataTypes.STRING(50),
  },
  promedio_notas: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Estudiante;
