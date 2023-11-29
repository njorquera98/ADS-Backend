const { Model, DataTypes } = require("sequelize");
const db = require('./database/db.js')

class Usuario extends Model {}

Usuario.init({
  id_usuario: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },

  nombre: {
    type: DataTypes.STRING
  },

  run: {
    type: DataTypes.STRING
  },

  apellido_materno: {
    type: DataTypes.STRING
  },

  apellido_paterno: {
    type: DataTypes.STRING
  },

  telefono: {
    type: DataTypes.INTEGER
  },

  rol: {
    type: DataTypes.STRING
  }

}, 
  {
    db,
    modelName: "Usuario"

  });

module.exports = Usuario;
