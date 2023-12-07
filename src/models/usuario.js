const { DataTypes } = require('sequelize');
const db = require('../database/db.js');

const UsuarioModel = db.define('Usuarios', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255)
  },
  run: {
    type: DataTypes.STRING(20),
    unique: true
  },
  email: {
    type: DataTypes.STRING(255)
  },
  apellido_paterno: {
    type: DataTypes.STRING(255)
  },
  apellido_materno: {
    type: DataTypes.STRING(255)
  },
  telefono: {
    type: DataTypes.STRING(50)
  },
  rol: {
    type: DataTypes.INTEGER
  },
  image_url: {
    type: DataTypes.STRING(255)
  }
});

module.exports = UsuarioModel;
