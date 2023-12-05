const express = require('express');
const router = express.Router();

const asignaturasRoute = require('./routes/asignaturas.route');
const usuariosRoute = require('./routes/usuarios.route');
const ayudantiasRoute = require('./routes/ayudantias.route');
const solicitudesRoute = require('./routes/solicitudes.route');
const periodosRoute = require('./routes/periodos.route');
const estudiantesRoute = require('./routes/estudiantes.route');

router.use('/asignaturas', asignaturasRoute);
router.use('/usuarios', usuariosRoute);
router.use('/ayudantias', ayudantiasRoute);
router.use('/solicitudes', solicitudesRoute);
router.use('/periodos', periodosRoute);
router.use('/estudiantes', estudiantesRoute);

module.exports = router;
