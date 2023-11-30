const { DataTypes } = require("sequelize");
const db = require('../database/db.js');

const UsuarioModel = db.define('Usuario',{
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  nombre: DataTypes.STRING,
  run: DataTypes.STRING,
  apellido_materno: DataTypes.STRING,
  apellido_paterno: DataTypes.STRING,
  telefono: DataTypes.INTEGER,
  rol: DataTypes.STRING

});

module.export = {UsuarioModel}
