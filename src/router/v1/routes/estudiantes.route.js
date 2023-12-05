const express = require('express');
const estudiantesController = require('../../../controllers/estudiantes.controller');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(estudiantesController.createEstudiante)
  .get(estudiantesController.getEstudiantes);

router
  .route('/:estudianteId')
  .get(estudiantesController.getEstudiante)
  .patch(estudiantesController.updateEstudiante)
  .delete(estudiantesController.deleteEstudiante);

module.exports = router;
