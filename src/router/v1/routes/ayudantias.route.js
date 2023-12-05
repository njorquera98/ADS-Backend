const express = require('express');
const ayudantiasController = require('../../../controllers/ayudantias.controller');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(ayudantiasController.createAyudantia)
  .get(ayudantiasController.getAyudantias);

router
  .route('/:ayudantiaId')
  .get(ayudantiasController.getAyudantia)
  .patch(ayudantiasController.updateAyudantia)
  .delete(ayudantiasController.deleteAyudantia);

module.exports = router;
