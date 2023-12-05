const express = require('express');
const usuariosController = require('../../../controllers/usuarios.controller');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(usuariosController.createUsuario)
  .get(usuariosController.getUsuarios);

router
  .route('/:usuarioId')
  .get(usuariosController.getUsuario)
  .patch(usuariosController.updateUsuario)
  .delete(usuariosController.deleteUsuario);

module.exports = router;
