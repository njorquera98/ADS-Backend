const {
  getAllAsignaturas,
  getAsignaturaById,
  createAsignatura,
  updateAsignaturaById,
  deleteAsignatura,
} = require('../controllers/asignaturas.controller');
const {
  getAllAyudantias,
  getAyudantiaById,
  createAyudantia,
  updateAyudantiaById,
  deleteAyudantia,
} = require('../controllers/ayudantias.controller');
const {
  getAllEstudiantes,
  getEstudianteById,
  createEstudiante,
  updateEstudianteById,
  deleteEstudiante,
} = require('../controllers/estudiantes.controller');
const {
  getAllPeriodos,
  getPeriodoById,
  createPeriodo,
  updatePeriodoById,
  deletePeriodo,
} = require('../controllers/periodos.controller');
const {
  getAllSolicitudes,
  getSolicitudById,
  createSolicitud,
  updateSolicitudById,
  deleteSolicitud,
} = require('../controllers/solicitudes.controller');
const {
  getAllUsuarios,
  createUsuario,
  getUsuarioById,
  updateUsuarioById,
  deleteUsuario,
} = require('../controllers/usuarios.controller');
const router = require('express').Router();

// Usuarios
router.get('/usuarios', getAllUsuarios);
router.post('/usuarios', createUsuario);
router.get('/usuarios/:id', getUsuarioById);
router.put('/usuarios/:id', updateUsuarioById);
router.delete('/usuarios/:id', deleteUsuario);

// Asignaturas
router.get('/asignaturas', getAllAsignaturas);
router.get('/asignaturas/:id', getAsignaturaById);
router.post('/asignaturas', createAsignatura);
router.put('/asignaturas/:id', updateAsignaturaById);
router.delete('/asignaturas/:id', deleteAsignatura);

// Estudiantes
router.get('/estudiantes', getAllEstudiantes);
router.get('/estudiantes/:id', getEstudianteById);
router.post('/estudiantes', createEstudiante);
router.put('/estudiantes/:id', updateEstudianteById);
router.delete('/estudiantes/:id', deleteEstudiante);

// Periodos
router.get('/periodos', getAllPeriodos);
router.get('/periodos/:id', getPeriodoById);
router.post('/periodos', createPeriodo);
router.put('/periodos/:id', updatePeriodoById);
router.delete('/periodos/:id', deletePeriodo);

// Ayudantías
router.get('/ayudantias', getAllAyudantias);
router.get('/ayudantias/:id', getAyudantiaById);
router.post('/ayudantias', createAyudantia);
router.put('/ayudantias/:id', updateAyudantiaById);
router.delete('/ayudantias/:id', deleteAyudantia);

// Solicitudes
router.get('/solicitudes', getAllSolicitudes);
router.get('/solicitudes/:id', getSolicitudById);
router.post('/solicitudes', createSolicitud);
router.put('/solicitudes/:id', updateSolicitudById);
router.delete('/solicitudes/:id', deleteSolicitud);

module.exports = router;
