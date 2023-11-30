const { DataTypes } = require("sequelize")
const db = require('../database/db.js')

const EstudianteModel = db.define('Estudiante', {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  nro_cuenta: DataTypes.STRING,
  tipo_cuenta: DataTypes.STRING,
  banco: DataTypes.STRING,
  promedio_notas: DataTypes.FLOAT(2,1)
  //Referenciar que id_usuario es la primaryKey pero foranea de la tabla usuario
});

module.exports = { EstudianteModel }
