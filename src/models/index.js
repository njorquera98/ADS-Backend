// En tu archivo index.js (o como prefieras llamarlo)
const UsuarioModel = require('./usuario');
const AsignaturaModel = require('./asignatura');
const PeriodoModel = require('./periodo');
const SolicitudesModel = require('./solicitudes');
const AyudantiasModel = require('./ayudantias');
const EstudianteModel = require('./estudiante'); // Agrega este modelo

module.exports = {
  UsuarioModel,
  AsignaturaModel,
  PeriodoModel,
  SolicitudesModel,
  EstudianteModel,
  AyudantiasModel,
};
