const express = require('express');
const asignaturasController = require('../../../controllers/asignaturas.controller');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(asignaturasController.createAsignatura)
  .get(asignaturasController.getAsignaturas);

router
  .route('/:asignaturaId')
  .get(asignaturasController.getAsignatura)
  .patch(asignaturasController.updateAsignatura)
  .delete(asignaturasController.deleteAsignatura);

module.exports = router;
