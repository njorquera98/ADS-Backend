const { DataTypes } =  require("sequelize");
const db = require('../database/db.js');

const AsignaturaModel = db.define('Asignatura', {
  id_asignatura: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },

  codigo: DataTypes.STRING,
  nombre: DataTypes.STRING,
  letra: DataTypes.STRING

});
module.export = { AsignaturaModel }
