const express = require('express');
const solicitudesController = require('../../../controllers/solicitudes.controller');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(solicitudesController.createSolicitud)
  .get(solicitudesController.getSolicitudes);

router
  .route('/:solicitudId')
  .get(solicitudesController.getSolicitud)
  .patch(solicitudesController.updateSolicitud)
  .delete(solicitudesController.deleteSolicitud);

module.exports = router;
