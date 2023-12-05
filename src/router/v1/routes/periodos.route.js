const express = require('express');
const periodosController = require('../../../controllers/periodos.controller');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(periodosController.createPeriodo)
  .get(periodosController.getPeriodos);

router
  .route('/:periodoId')
  .get(periodosController.getPeriodo)
  .patch(periodosController.updatePeriodo)
  .delete(periodosController.deletePeriodo);

module.exports = router;
